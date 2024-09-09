"use client";

import React from "react";
import Search from "./search";

export default function Main() {
    return(
        <main className="flex flex-col justify-center w-full h-full gap-2 2xsm:gap-3 md:gap-4 mt-9 2xsm:mt-12 xsm:mt-16 sm:mt-20">
            <h1 className="text-center font-semibold text-2xl 2xsm:text-3xl xsm:text-4xl sm:text-5xl">Have I been cracked?</h1>
            <p className="text-center font-oxygenMono text-2xsm 2xsm:text-xs xsm:text-sm md:text-lg">Check if your WiFi has been cracked</p>
            <Search />
        </main>
    );
}