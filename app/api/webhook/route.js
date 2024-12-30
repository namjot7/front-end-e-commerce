import { initMongoose } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Stripe from 'stripe';
import { buffer } from 'micro'
import Order from "@/models/Order";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = 'whsec_4cd2b1d64f33446717aca832162c70a012098aa2e7db170e7d778b15621aa33f';

export async function POST(req, res) {
    await initMongoose();

    const sig = req.headers.get('stripe-signature');
    let event;

    // Convert the Request object into a buffer
    const reqBuffer = await req.arrayBuffer();
    const rawBody = Buffer.from(reqBuffer);

    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret); // req.body

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const data = event.data.object;
            const orderId = data.metadata.orderId;
            const paidStatus = data.payment_status;
            // console.log(paymentIntent);

            if (orderId && paidStatus == "paid") {
                await Order.findByIdAndUpdate(orderId, {
                    paid: true
                })
            }
            break;
        // other event types: charge.updated   payment_intent.created     charge.succeeded (got credit details)     payment_intent.succeeded
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({ success: "YES" });
}
// Disable body parser to avoid API automatically converting the request to JSON data
export const config = {
    api: { bodyParser: false }
};


export async function GET(req, res) {
    await initMongoose();

    const sig = req.headers['stripe-signature'];

    let event;

    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret); // req.body
    // try {
    // }
    // catch (err) {
    //     response.status(400).send(`Webhook Error: ${err.message}`);
    // }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            // Then define and call a method to handle the successful payment intent.
            // handlePaymentIntentSucceeded(paymentIntent);
            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({ success: true });
}
