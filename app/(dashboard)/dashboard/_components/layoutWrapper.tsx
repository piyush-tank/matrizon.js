"use client";
import { User } from "@prisma/client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import Navbar from "../../_component/navbar";
import { Tverified } from "@/action/get-user-privatedata";
import Sidebar from "../../_component/sidebar";

const NavbarStore = createContext<{
  user: User | null;
  rigntSideBarOpen: boolean;
  setRightSideBarOpen: Dispatch<SetStateAction<boolean>>;
  setPostCreating: Dispatch<SetStateAction<boolean>>;
  isCreatingPost: boolean;
  verified: Tverified;
}>({
  user: null,
  rigntSideBarOpen: false,
  setRightSideBarOpen: () => undefined,
  isCreatingPost: false,
  setPostCreating: () => undefined,
  verified: {
    hasCalender: false,
    hasEmail: false,
    hasJira: false,
    hasHubspot: false,
  },
});

export const useNavbarStore = () => {
  return useContext(NavbarStore);
};

export default function LayoutWrapper({
  user,
  children,
  verified,
}: {
  user: User;
  children: React.ReactNode;
  verified: Tverified;
}) {
  const pathname = usePathname();
  const [rigntSideBarOpen, setRightSideBarOpen] = useState(false);
  const [isCreatingPost, setPostCreating] = useState(false);
  return (
    <NavbarStore.Provider
      value={{
        verified,
        rigntSideBarOpen,
        user,
        setRightSideBarOpen,
        setPostCreating,
        isCreatingPost,
      }}
    >
      <div className="h-screen w-full">
        <Navbar />
        <div className="flex h-full">
          {" "}
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </NavbarStore.Provider>
  );
}
