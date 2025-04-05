// pages/api/users/[orgId].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export  async function GET(req: NextApiRequest, {params} :{params :{orgId :string}} , res: NextApiResponse) {
  const {orgId} = params
 console.log(orgId)
  try {
    const users = await prisma.user.findMany({
      where: {
        organizationId: orgId,
        role:"USER"
      },
    });
   return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}
