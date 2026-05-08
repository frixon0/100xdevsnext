import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const body= await req.json()
    console.log(body)
    //database hit
    // 'postgresql://neondb_owner:npg_Khyj1cBO0Tkm@ep-spring-credit-aqn91i2h-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
   return NextResponse.json("Signed up succesfuly")
}
