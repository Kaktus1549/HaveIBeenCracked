"use client";

import React from "react";

export default function Matches({ matches, setMatches, transition }: {matches: WiFiMatch[], setMatches: (newMatches: WiFiMatch[]) => void, transition: boolean}) {
    if (matches.length === 0){
        return(
            <div id="no-match" className="w-screen bg-noMatch shadow-custom-green absolute bottom-0 flex items-center justify-start flex-col md:h-36 sm:h-28 h-20 animate-appear opacity-0">
                <h2 className="text-center font-semibold text-lg 2xsm:text-1xl xsm:text-2xl sm:text-3xl md:mt-3 sm:mt-1">No matches found - Great!</h2>
                <p className="text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs sm:text-sm md:mt-16 sm:mt-10 mt-5">If you want to feel safe feel free to ready <span className="underline">security tips!</span></p>
            </div>
        );
    }
    
    let content: JSX.Element | null = null;
    let bgColor: string = "";
    let hint: string = "";
    let hintContent: { __html: string } = { __html: "" };
    let animation: string = transition ? " animate-colors opacity-1" : " animate-appear opacity-0";

    let spanClasses: string = "font-semibold";
    let pClasses: string = "text-base 2xsm:text-md xsm:text-lg sm:text-xl text-center";
    
    if (matches.length > 1) {
        bgColor = "bg-multipleMatches shadow-custom-orange";
        let pClass = pClasses + " cursor-pointer hover:underline transition duration-300 hover:transform hover:scale-105"

        content = <div className="flex flex-col items-center justify-center sm:min-h-36 sm:mb-8 min-h-24 mb-6">
            <p className={pClasses + " mt-5 mb-2"}><span className={spanClasses}>Matches with their BSSID:</span></p>
            {matches.map((match, index) => (
                <p key={index} className={pClass} onClick={() => setMatches([match])}>{match.ssid} - {match.bssid}</p>
            ))}
            </div>
        hint = "You seem to have a common WiFi name, so the result may not be as accurate.";
        hintContent = { __html: hint };
    }
    else{
        bgColor = "bg-oneMatch shadow-custom-red";
        content = <div className="flex flex-col items-start justify-center sm:min-h-36 xsm:min-h-32 min-h-28 mt-2 xsm:mt-0">
                    <p className={pClasses}><span className={spanClasses}>SSID:</span> {matches[0].ssid}</p>
                    <p className={pClasses}><span className={spanClasses}>BSSID:</span> {matches[0].bssid} {matches[0].vendor ? `(${matches[0].vendor})` : ""}</p>
                    <p className={pClasses}><span className={spanClasses}>Time:</span> {matches[0].timestamp}</p>
                  </div>
        hint = 'If you want to protect yourself, you can read the <span class="underline cursor-pointer">security tips!</span>';
        hintContent = { __html: hint };    
    }

    return (
        <div id="matches" className={"w-screen mt-28 2xsm:mt-20 flex items-center justify-start flex-col pl-1 pr-1 " + bgColor + animation}>
            <h2 className="mt-3 text-center font-semibold text-xl 2xsm:text-2xl xsm:text-3xl sm:text-4xl">{matches.length > 1 ? "Multiple matches found" : "Match found"}</h2>
                {content}
            <p className="mb-4 text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs sm:text-sm" dangerouslySetInnerHTML={hintContent}></p>
        </div>
    );
};