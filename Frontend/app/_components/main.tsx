"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./search";
import Matches from "./matches";

export default function Main({disappear, setPage}: {disappear: boolean| null, setPage: (page: string) => void}) {
    const [matches, setMatches] = useState<WiFiMatch[] | null>(null);
    const [transition, setTransition] = useState<boolean>(false);
    const [currentColor, setCurrentColor] = useState<string>("green");

    let animation = disappear === null ? "animate-slideIn opacity-0" : disappear ? "animate-disappear opacity-1" : "animate-appear opacity-0";


    function changeMatches(newMatches: WiFiMatch[]){
        if (matches === null){
            return;
        }
        setCurrentColor(matches.length === 1 ? "red" : matches.length > 1 ? "orange" : "green");
        setMatches(newMatches);
        setTransition(true);
    }

    return(
        <main className={"flex flex-col justify-center w-full min-h-full gap-2 mt-44 2xsm:gap-3 md:gap-4 xsm:mt-36 sm:mt-20 overflow-hidden relative " + animation}>
            <h1 className="text-center font-semibold text-2xl 2xsm:text-3xl xsm:text-4xl sm:text-5xl">Have I been cracked?</h1>
            <p className="text-center font-oxygenMono text-2xsm 2xsm:text-xs xsm:text-sm md:text-lg">Check if your WiFi has been cracked</p>
            <Search setMatches={setMatches} matchesList={matches} setTransition={setTransition} setColor={setCurrentColor} />
            { matches !== null &&
                // currentColor is based on length of matches, if there is only one match, it will be red, if there are multiple matches, it will be orange, if there are no matches, it will be green
                <Matches matches={matches} setMatches={changeMatches} transition={transition} currentColor={currentColor} setPage={setPage} />
            }
        </main>
    );
}