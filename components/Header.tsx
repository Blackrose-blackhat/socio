import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-center items-center px-24">
        <UserButton />
        <h1 className="text-6xl font-bold tracking-wider leading-relaxed">
          Let&apos;s Get You Connected !
        </h1>

        <div>
          <Avatar></Avatar>
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 justify-center w-full">
        <Button className="rounded-2xl font-semibold" size="lg">
          <Link href={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}>
            Get Started
          </Link>
        </Button>
        <Button
          className="rounded-2xl font-semibold"
          size="lg"
          variant="outline"
        >
          <Link href={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}>
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
