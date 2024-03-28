import Header from "@/components/Header";
import TopNavBar from "@/components/shared/TopNavBar";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col justify-center  items-center w-full ">
      <TopNavBar />

      <section className="flex flex-col min-h-screen items-center justify-center w-full">
        <Header />
      </section>
    </main>
  );
};

export default page;
