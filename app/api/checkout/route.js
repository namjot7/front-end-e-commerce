import { NextResponse } from "next/server";

export const GET = () => {
    console.log("get checkout");
    return NextResponse.json({ success: true });
}
