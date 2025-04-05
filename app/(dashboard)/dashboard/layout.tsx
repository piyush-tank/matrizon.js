 



import getUser from "@/action/get-user";
 
import { getUserPrivateDataBoolean } from "@/action/get-user-privatedata";
import LayoutWrapper from "./_components/layoutWrapper";
import { redirect } from "next/navigation";


const DashboardLayout =  async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser()
 
  console.log(user)
  if(!user) {
    return redirect('/onboarding')
  }

 
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

