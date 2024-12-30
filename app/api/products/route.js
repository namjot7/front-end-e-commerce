import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";


// 4 Cases: Featured, Cart, Latest, All

export const GET = async (req) => {
    await initMongoose();

    // Get product by ID for editing from Req
    const symbols = Object.getOwnPropertySymbols(req);
    const state = req[symbols[1]];
    const searchParams = state.url.searchParams;

    const id = searchParams.get('id');
    const ids = searchParams.get('ids');
    const latest = searchParams.get('latest');
    console.log({ id, ids, latest });

    // Featured product
    if (id) {
        const featuredProduct = await Product.findById(id);
        return NextResponse.json(featuredProduct);
    }
    // Cart products
    else if (ids) {
        let idsArray = ids.split(","); // convert string to array
        // console.log("Ids", idsArray);
        let products = [];

        for (let id of idsArray) {
            const product = await Product.findById(id);
            products.push(product)
        }
        return NextResponse.json(products);
    }
    // Latest products  
    else if (latest) {
        const latestProducts = await Product.find({}, null, { sort: { "updatedAt": -1 }, limit: 5 }); // OR  { sort: { "_id": -1 } } OR { sort: { "updatedAt": -1 }}).limit(5)
        return NextResponse.json(latestProducts); // return an Array: latest updated being as array[0] first element
    }
    // All products
    const allProducts = await Product.find();
    return NextResponse.json(allProducts);
}
