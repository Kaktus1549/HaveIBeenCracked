"use client";

import React from "react";

export default function Matches({ matches, setMatches }: {matches: WiFiMatch[], setMatches: React.Dispatch<React.SetStateAction<WiFiMatch[]>>}) {
    if (matches.length === 0) return null;
    
    let content: JSX.Element | null = null;
    let bgColor: string = "";
    let hint: string = "";

    let spanClasses: string = "font-semibold";
    let pClasses: string = "text-sm 2xsm:text-xs xsm:text-sm sm:text-xl text-center";
    
    if (matches.length > 1) {
        bgColor = "bg-multipleMatches shadow-custom-orange";
        let pClass = pClasses + " cursor-pointer hover:underline transition duration-300 hover:transform hover:scale-105"

        content = <div className="flex flex-col items-center justify-center min-h-36 mb-8">
            <p className={pClasses + " mt-5 mb-2"}><span className={spanClasses}>Matches with their BSSID:</span></p>
            {matches.map((match, index) => (
                <p key={index} className={pClass} onClick={() => setMatches([match])}>{match.ssid} - {match.bssid}</p>
            ))}
            </div>
        hint = "You seem to have a common WiFi name, so the result may not be as accurate.";
    }
    else{
        bgColor = "bg-oneMatch shadow-custom-red";
        content = <div className="flex flex-col items-start justify-center min-h-36 ">
                    <p className={pClasses}><span className={spanClasses}>SSID:</span> {matches[0].ssid}</p>
                    <p className={pClasses}><span className={spanClasses}>BSSID:</span> {matches[0].bssid} {matches[0].vendor ? `(${matches[0].vendor})` : ""}</p>
                    <p className={pClasses}><span className={spanClasses}>Time:</span> {matches[0].timestamp}</p>
                  </div>
        hint = "If you want to protect yourself, read the security tips!";
    }

    return (
        <div id="matches" className={"w-screen mt-20 flex items-center justify-start flex-col " + bgColor}>
            <h2 className="mt-3 text-center font-semibold text-xl 2xsm:text-2xl xsm:text-3xl sm:text-4xl">{matches.length > 1 ? "Multiple matches found" : "Match found"}</h2>
                {content}
            <p className="mb-4 text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs md:text-sm">{hint}</p>
        </div>
    );
};