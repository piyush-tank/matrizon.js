import { db } from "@/prisma/db"
import getUser from "./get-user"

 

const getOrganization = async () =>{
   const User = await getUser()
    try {
         if(!User) return null
         
        const user = await db.user.findFirst({
            where:{
                userId:User.userId,
              
            },
            select:{
                organization:{
                    
                    
                }
            }
        })

        
        // const organization = await db.organization.findFirst({
        //     where :{
        //         id:user?.organizationId
        //     },
        //     include:{
        //         branches:true
        //     }
        // })
        return user?.organization
    } catch (error) {
        return null
    }
    

}
export default getOrganization


export const getOrganizationknow = async () =>{
    const User = await getUser()
     try {
          if(!User) return null
          
         const user = await db.user.findFirst({
             where:{
                 userId:User.userId,
             },

             include:{
                 organization: true
             }
         })
         return user?.organization?.knowledgeBase
     } catch (error) {
         return null
     }
 }
