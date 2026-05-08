import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const body= await req.json()
    console.log(body)

    //database hit
   return NextResponse.json("Signed in succesfuly")
}
