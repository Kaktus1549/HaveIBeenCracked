"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./search";
import Matches from "./matches";

export default function Main() {
    const [matches, setMatches] = useState<WiFiMatch[] | null>(null);
    const [transition, setTransition] = useState<boolean>(false);


    function changeMatches(newMatches: WiFiMatch[]){
        setMatches(newMatches);
        setTransition(true);
    }

    return(
        <main className="flex flex-col justify-center w-full h-full gap-2 mt-44 2xsm:gap-3 md:gap-4 xsm:mt-36 sm:mt-20 animate-slideIn opacity-0 overflow-hidden">
            <h1 className="text-center font-semibold text-2xl 2xsm:text-3xl xsm:text-4xl sm:text-5xl">Have I been cracked?</h1>
            <p className="text-center font-oxygenMono text-2xsm 2xsm:text-xs xsm:text-sm md:text-lg">Check if your WiFi has been cracked</p>
            <Search setMatches={setMatches} />
            { matches !== null &&
                <Matches matches={matches} setMatches={changeMatches} transition={transition} />
            }
        </main>
    );
}