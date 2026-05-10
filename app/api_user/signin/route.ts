import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const client = new PrismaClient({ adapter });
export async function GET(req:NextRequest){
    const body= await req.json()
    
    await client.user.findUnique({
        where:{
            email: body.email
        }
    })
     

    //database hit

   return NextResponse.json("Signed in succesfuly")
}
