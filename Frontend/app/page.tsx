"use client";

import React from "react";
import { useState } from "react";
import Navbar from "./_components/navbar";
import Main from "./_components/main";
import About from "./_components/about";
import Tips from "./_components/tips";

export default function Home() {
  const [page, setPage] = useState<string>("home");
  const [disappear, setDisappear] = useState<boolean | null>(null);

  function changePage(page: string) {
    setDisappear(true);
    setTimeout(() => {
      setPage(page);
      setDisappear(false);
    }, 400);
  }

  return (
    <>
      <Navbar changeTopic={changePage} />
      { page === "home" ?
        <Main disappear={disappear} />
        :
        page === "about" ?
        <About disappear={disappear} />
        :
        page === "security tips" &&
        <Tips disappear={disappear} />
      }
    </>
  );
}
