"use client";

import React from "react";
import { useState } from "react";
import Navbar from "./_components/navbar";
import Main from "./_components/main";
import About from "./_components/about";
import Tips from "./_components/tips";

export default function Home() {
  const [page, setPage] = useState<string>("about");
  return (
    <>
      <Navbar changeTopic={setPage} />
      { page === "home" ?
        <Main />
        :
        page === "about" ?
        <About />
        :
        page === "security tips" &&
        <Tips />
      }
    </>
  );
}
