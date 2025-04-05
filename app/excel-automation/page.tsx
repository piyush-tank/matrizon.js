'use client'

import { useState } from "react";
import DisplayExecel from "./_compoent/display-execel";
import Chat from "./_compoent/excelbot";


export default function Home() {
  const [excelData, setExcelData] = useState<string>("");


  return (
   <div className="flex h-full overflow-hidden justify-between ">
     {/* @ts-ignore */}
    <DisplayExecel excelData={excelData}  />
    <Chat excelData={excelData}  setExcelData={setExcelData} />
   </div>
  );
}
