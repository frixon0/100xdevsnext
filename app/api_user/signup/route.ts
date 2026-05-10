import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const client = new PrismaClient({ adapter });

export async function POST(req:NextRequest){
    const body= await req.json()
    
    try {
        const hashedPassword = await bcrypt.hash(body.password, 10)
        const user = await client.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: hashedPassword,
        },  
    })

   return NextResponse.json({
    id: user.id,
    name: user.name,
    email: user.email,
   })
    } catch {
        return NextResponse.json({msg:"Error signing up"},{status:411})
    }
    
}
