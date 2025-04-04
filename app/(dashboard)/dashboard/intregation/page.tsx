"use client";
import React from "react";

 
import GoogleIntregation from "./_components/google-intrigation";
import { useNavbarStore } from "../_components/layoutWrapper";
 


export default function IntegrationPage() {
  const { verified } = useNavbarStore();
  return (
    <div>
      <GoogleIntregation verified={verified} />
    </div>
  );
}
