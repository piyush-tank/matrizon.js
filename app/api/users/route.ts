import { db } from "@/prisma/db";
import { useClerk } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { MailSend } from "../chat/_components/send-mail";


export async function POST(request: Request) {
  try {
    const client = await clerkClient()


    const body = await request.json();
    const { firstName, lastName, email, contactNumber, role } = body;

 await client.users.createUser({
    emailAddress:[email],
    password:'12345678'
})

 try {
   await  MailSend({to:email , subject :"Credential" , text :`username : ${email} pass :12345678` } )
 } catch (error) {
    
 }
    // Generate a unique userId (you can modify this logic as needed)
    const userId = Math.random().toString(36).substring(2, 15);

    const user = await db.user.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        contactNumber,
        role,
      },
    });
 

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
