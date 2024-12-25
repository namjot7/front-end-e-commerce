import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await initMongoose();

    // Get product by ID for editing from Req
    const symbols = Object.getOwnPropertySymbols(req);
    const state = req[symbols[1]];
    const searchParams = state.url.searchParams;
    const id = searchParams.get('id');
    console.log(id);

    // Featured product
    if (id) {
        const featuredProduct = await Product.findById(id);
        return NextResponse.json(featuredProduct);
    }
    // Return all products / { sort: { "_id": -1 } }
    const allProducts = await Product.find({}, null, { sort: { "updatedAt": -1 }, limit: 5 }); // or { sort: { "updatedAt": -1 }}).limit(5)
    return NextResponse.json(allProducts);
    // return an Array: latest updated as array[0] first element
    // limit the latest products to 3 or 5
}
