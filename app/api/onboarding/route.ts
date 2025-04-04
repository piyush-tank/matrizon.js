// app/api/onboarding/route.ts
import { db } from '@/prisma/db';
import { NextResponse } from 'next/server';
 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      userId,
      email,
      imageUrl,
      firstName,
      lastName,
      userContact,
      organizationName,
      organizationEmail,
      organizationSize,
      organizationContact,
    } = body;

    // Create Organization record
    const org = await db.organization.create({
      data: {
        name: organizationName,
        orgEmail: organizationEmail,
        contactsNumber: organizationContact,
        organizationSize,
        createdBy: userId,
      },
    });

    // Create User record and link to Organization via organizationId
    const newUser = await db.user.create({
      data: {
        userId,
        email,
        imageUrl,
        firstName,
        lastName,
        contactNumber: userContact,
        organizationId: org.id,
      },
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Onboarding error:', error);
    return new NextResponse('Failed to onboard user', { status: 500 });
  }
}
