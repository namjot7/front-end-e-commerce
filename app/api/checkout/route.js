import { initMongoose } from "@/lib/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    await initMongoose();

    const body = await req.json();
    const { username, email, city, psotalCode, country, streetAddress, productsIds } = body;
    const uniqIds = [...new Set(productsIds)];

    // Filter products w.r.t to UniqIds
    const products = await Product.find({ _id: { $in: uniqIds } }).exec(); // exec is used on a query to execute it and return a promise, more control over handling the query's result
    const line_items = [];

    // console.log('User Information:', body);
    // console.log('Product IDs:', productsIds);
    // console.log(uniqIds);
    // console.log(products);

    for (const productId of uniqIds) {
        // Get the product and it's quantity
        const quantity = productsIds.filter(id => id == productId).length;
        const product = products.filter(p => p._id == productId);

        // console.log('Quantity:', quantity);
        // console.log(product[0]); // array with one object

        line_items.push({
            quantity,
            price_data: {
                product_data: { name: product[0].title },
                currency: "CAD",
                unit_amount: product[0].price * 100, // converted to cents (lowest currency unit)

            },
        })
    }
    // console.log(line_items);

    // Setting up the order
    const order = await Order.create({
        products: line_items,
        username,
        email,
        streetAddress,
        city,
        psotalCode,
        country,
        paid: false,
    });
    // console.log(order);


    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: `${process.env.LOCAL_HOST}/cart?success=true`,
        cancel_url: `${process.env.LOCAL_HOST}/car/?cancel=true`,
        metadata: { orderId: order._id.toString() } // send this to user as orderId for reference
    })
    // console.log(session.url);

    return NextResponse.json({ success: true, url: session.url });
}
