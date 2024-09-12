"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./search";
import NoMatch from "./no-match";
import Matches from "./matches";

export default function Main() {
    const [matches, setMatches] = useState<WiFiMatch[]>([]);

    useEffect(() => {
        setMatches([{ssid: "dzentoo", bssid: "00:1A:2B:3C:4D:5E", vendor: "Cisco", timestamp: "2021-10-10T10:10:10"}, {ssid: "dzentoo", bssid: "00:1A:2B:3C:4D:5F", vendor: "kektus", timestamp: "2022-10-10T10:10:10"}]);
    }, []);

    return(
        <main className="flex flex-col justify-center w-full h-full gap-2 2xsm:gap-3 md:gap-4 mt-9 2xsm:mt-44 xsm:mt-36 sm:mt-20">
            <h1 className="text-center font-semibold text-2xl 2xsm:text-3xl xsm:text-4xl sm:text-5xl">Have I been cracked?</h1>
            <p className="text-center font-oxygenMono text-2xsm 2xsm:text-xs xsm:text-sm md:text-lg">Check if your WiFi has been cracked</p>
            <Search />
            <Matches matches={matches} setMatches={setMatches} />
        </main>
    );
}