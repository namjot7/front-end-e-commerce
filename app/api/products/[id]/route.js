import { initMongoose } from "@/lib/mongoose"
import { NextResponse } from "next/server";

// export const GET = async (req) => {
//     await initMongoose();

//     // Get product by ID for editing from Req
//     // const symbols = Object.getOwnPropertySymbols(req);
//     // const state = req[symbols[1]];
//     // const searchParams = state.url.searchParams;

//     // const id = searchParams.get('id');
//     // console.log({ id });

//     return NextResponse.json({ method: "get request sent" })
// }