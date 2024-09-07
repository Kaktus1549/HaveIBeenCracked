"use client";

import React from "react";
import Search from "./search";

export default function Main() {
    return(
        <main className="flex flex-col justify-center gap-4 mt-20 w-full h-full">
            <h1 className="text-center font-semibold text-5xl">Have I been cracked?</h1>
            <p className="text-center text-lg font-oxygenMono">Check if your WiFi has been cracked</p>
            <Search />
        </main>
    );
};