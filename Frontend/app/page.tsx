"use client";

import React from "react";
import { useState } from "react";
import Navbar from "./_components/navbar";
import Main from "./_components/main";
import About from "./_components/about";
import Tips from "./_components/tips";

export default function Home() {
  const [page, setPage] = useState<string>("Home");
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
      <Navbar changeTopic={changePage} currentPage={page} />
      { page === "Home" ?
        <Main disappear={disappear} setPage={setPage} />
        :
        page === "About" ?
        <About disappear={disappear} />
        :
        page === "Security tips" &&
        <Tips disappear={disappear} />
      }
    </>
  );
}
