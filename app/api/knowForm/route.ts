// app/api/knowForm/route.ts
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/prisma/db';
 

export async function POST(req: Request) {
  try {
    // Get the current user's ID using Clerk auth.
    const { userId } =  await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse the incoming JSON body to extract the knowledgeBase data.
    const body = await req.json();
    const { knowledgeBase } = body;
    if (!knowledgeBase) {
      return NextResponse.json({ error: 'knowledgeBase value is required' }, { status: 400 });
    }

    // Find the user record in the database based on the Clerk userId.
    const userRecord = await db.user.findUnique({
      where: { userId },
    });
    if (!userRecord || !userRecord.organizationId) {
      return NextResponse.json({ error: 'User organization not found' }, { status: 404 });
    }

    // Update the organization with the provided knowledgeBase value.
    const updatedOrg = await db.organization.update({
      where: { id: userRecord.organizationId },
      data: { knowledgeBase },
    });

    return NextResponse.json({ success: true, organization: updatedOrg });
  } catch (error) {
    console.error('Error updating knowledgeBase:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
