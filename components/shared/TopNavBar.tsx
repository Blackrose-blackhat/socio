"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useScramble } from "use-scramble";
import { SignedOut } from "@clerk/nextjs";

const TopNavBar = () => {
  const { ref } = useScramble({
    text: "SOCIO",
    speed: 0.08,
  });
  return (
    <nav className="top-0 flex flex-row justify-between items-center w-full p-5 fixed border-b">
      <div className="flex flex-row justify-between w-full items-center ">
        <span
          ref={ref}
          className="font-bold tracking-widest leading-relaxed text-lg "
        />
        <SignedOut>
          <div className="flex flex-row items-center gap-5">
            <Button>
              <Link href={`${process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}`}>
                Get Started
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href={`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`}>
                Login
              </Link>
            </Button>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};

export default TopNavBar;
