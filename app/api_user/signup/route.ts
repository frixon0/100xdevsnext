import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const client = new PrismaClient({ adapter });

export async function POST(req:NextRequest){
    const body= await req.json()
    
    try {
        const user = await client.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
        },  
    })

   return NextResponse.json(body)
    } catch (error) {
        return NextResponse.json({msg:"Error signing up"},{status:411})
    }
    
}
