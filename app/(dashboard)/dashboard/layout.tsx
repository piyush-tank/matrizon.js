 



import getUser from "@/action/get-user";
 
import { getUserPrivateDataBoolean } from "@/action/get-user-privatedata";
import LayoutWrapper from "./_components/layoutWrapper";


const DashboardLayout =  async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser()
 
  if(!user) return


 


 
   const verified = await getUserPrivateDataBoolean(user.userId)

  


  return (
    <div className="h-screen w-full flex">
      <LayoutWrapper verified={verified}   user={user} >
        {children}
      </LayoutWrapper>
    </div>
  );
};

export default DashboardLayout;

