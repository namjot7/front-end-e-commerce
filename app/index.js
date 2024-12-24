import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export default async function getServersideProps() {
    await initMongoose();

    const featuredProduct = "";
    const product = await Product.findById(featuredProduct)
    return NextResponse.json({ data: true })
}