"use client";
import { HomeIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";

import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import React from "react";

import { IoLogOut } from "react-icons/io5";
import { sidebarLinks } from "@/lib/constants/navLinks";
const SideNavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { userId } = useAuth();
  return (
    <div className="border min-h-[70vh] flex flex-col items-center  rounded-2xl p-2 py-5 shadow-lg shadow-muted ">
      <div className=" flex w-full flex-1 flex-col justify-between h-screen items-start align-middle   ">
        <div className="flex flex-col  gap-10 w-full  ">
          {sidebarLinks.map((link) => {
            const isActive =
              (pathName.includes(link.route) && link.route.length > 1) ||
              pathName == link.route;

            if (link.route === "/profile")
              link.route = `${link.route}/${userId}`;

            return (
              <Link href={link.route} key={link.label} className="text-center">
                <Button
                  variant="link"
                  className={`hover:bg-muted text-2xl ${
                    isActive && " border bg-muted     "
                  }`}
                >
                  {link.imgUrl}

                  {/* <p className="hidden lg:block">{link.label}</p> */}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="my-9 mx-7  cursor-pointer hover:opacity-100 opacity-90">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push("/")}>
              <div className="flex flex-row items-center gap-3 ">
                <IoLogOut className="text-3xl" />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
