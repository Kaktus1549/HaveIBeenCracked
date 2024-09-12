"use client";

import React from "react";

export default function NoMatch() {
    return(
        <div id="no-match" className="w-screen bg-noMatch shadow-custom-green absolute bottom-0 h-36 flex items-center justify-start flex-col">
            <h2 className="mt-3 text-center font-semibold text-lg 2xsm:text-1xl xsm:text-2xl sm:text-3xl">No matches found - Great!</h2>
            <p className="mt-16 text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs md:text-sm">If you want to feel safe feel free to ready <span>security tips!</span></p>
        </div>
    );
};