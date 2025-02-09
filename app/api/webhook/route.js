import { initMongoose } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Stripe from 'stripe';
// import { buffer } from 'micro' // not working
import Order from "@/models/Order";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_CLI_ENDPOINT_SECRET;

export async function POST(req, res) {
    await initMongoose();

    try {
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
                console.log(orderId);

                if (orderId && paidStatus == "paid") {
                    await Order.findByIdAndUpdate(orderId, {
                        paid: true
                    })
                }
                break;
            // other event types: charge.updated   payment_intent.created     charge.succeeded (got credit details)     payment_intent.succeeded
            default: console.log(`Unhandled event type ${event.type}`);
        }
        return NextResponse.json({ success: "YES" });
    }
    catch (err) {
        return NextResponse.json({ err });

    }
}
// Disable body parser to avoid API automatically converting the request to JSON data
export const config = {
    api: { bodyParser: false }
};