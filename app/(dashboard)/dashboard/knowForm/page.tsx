import React from "react";
 
import KnowledgeBaseForm from "./_components/edit-form-knowledge";
import EditKnowledge from "./_components/edit-knowlwdge";
import { getOrganizationknow } from "@/action/get-organization";

export default async function page() {
  const knowledgeBase = await getOrganizationknow();

  return (
    <> <EditKnowledge knowledge={knowledgeBase}/> </>
  );
}