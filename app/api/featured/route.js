import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    await initMongoose();
    const id = "67639ec49fe9a6e1caa55330"; // featured product id
    const featuredProduct = await Product.findById(id);
    return NextResponse.json({ featuredProduct });
}
