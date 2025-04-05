"use client";

import { motion } from "motion/react";
 
import { Button } from "@/components/ui/button";
import {
  FileText,
  FileSpreadsheet,
  MessageSquare,
  Mail,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "./ui/background";
import { useUser } from "@clerk/nextjs";
 

export default function AHRiLandingPage() {
    const {user} = useUser()
  return (
    <AuroraBackground className="h-screen bg-black">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-6 items-center justify-center text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Meet{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              aHRi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Your AI-powered HR assistant designed to automate HR tasks and make
            operations seamless and efficient
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 w-full max-w-3xl">
            <FeatureIcon
              icon={<FileText className="w-6 h-6" />}
              label="Resume Shortlisting"
            />
            <FeatureIcon
              icon={<FileSpreadsheet className="w-6 h-6" />}
              label="Excel Automation"
            />
            <FeatureIcon
              icon={<MessageSquare className="w-6 h-6" />}
              label="HR Queries"
            />
            <FeatureIcon
              icon={<Mail className="w-6 h-6" />}
              label="Lead Emails"
            />
            <FeatureIcon
              icon={<BarChart3 className="w-6 h-6" />}
              label="Workload Management"
            />
              <FeatureIcon
              className="mx-auto"
              icon={<BarChart3 className="w-6 h-6" />}
              label="Personal training of agent"
            />
          </div>

          <Link href={ !user ? `/sign-in` :"/dashboard/chat"} className="cursor-pointer z-50">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

// Component for feature icons
function FeatureIcon({ icon, label , className }: { icon: any; label: string , className? :string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
        {icon}
      </div>
      <span className="text-sm text-gray-300 text-center">{label}</span>
    </motion.div>
  );
}