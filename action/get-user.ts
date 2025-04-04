 
import { db } from "@/prisma/db";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";



const getUser = async (): Promise<null | User> => {
  const { userId } = await auth();

  if (!userId) return null;
  try {
    const user = await db.user.findFirst({
      where: {
        userId: userId,
      },
    });

    return user;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export default getUser;

export const getUserfullDetail = async (username?: string) => {
  const { userId } = await auth();
  if (!userId) return null;
  try {
    if (username == undefined) {
      return await db.user.findFirst({
        where: {
          userId: userId,
        },
        
      });
    } else {
      return await db.user.findFirst({
        where: {
          userName: username,
        },
       
      });
    }
  } catch (error) {
    return null;
  }
};
