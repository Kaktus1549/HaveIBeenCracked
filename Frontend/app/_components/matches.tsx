"use client";

import React from "react";
import { getVendor } from "../api/api";
import { useEffect, useState, ReactNode } from "react";

export default function Matches({ matches, setMatches, transition, currentColor, setPage }: {matches: WiFiMatch[], setMatches: (newMatches: WiFiMatch[]) => void, transition: boolean, currentColor: string, setPage: (page: string) => void }) {
    const [vendor, setVendor] = useState<string | null>(null);
    const [animation, setAnimation] = useState<string>("");
    const [bgColor, setBgColor] = useState<string>("");
    const [hintElement, setHintElement] = useState<ReactNode | null>(null);

    function changeColor(startClass: string, endClass: string) {
        setBgColor(startClass);
        setTimeout(() => {
            setBgColor(endClass);
        }, 700);
    }

    useEffect(() => {
        const fetchVendor = async () => {
            if (transition === true && matches.length === 1) {
                const vendor = await getVendor(matches[0].bssid);
                matches[0].vendor = vendor;
                setVendor(vendor);
            }
        };
        fetchVendor();
    }, [transition, matches]);
    useEffect(() => {
        if (matches.length === 0) {
            if (currentColor === "orange") {
                if (transition === false) {
                    changeColor("bg-noMatch shadow-custom-green", "bg-noMatch shadow-custom-green");
                    setAnimation(" animate-appear opacity-0");
                }
                else {
                    changeColor("bg-multipleMatches shadow-custom-orange", "bg-noMatch shadow-custom-green");
                    setAnimation(` animate-orangeGreen opacity-1`);
                }
            } else if (currentColor === "red") {
                if (transition === false) {
                    changeColor("bg-noMatch shadow-custom-green", "bg-noMatch shadow-custom-green");
                    setAnimation(" animate-appear opacity-0");
                }
                else {
                    changeColor("bg-oneMatch shadow-custom-red", "bg-noMatch shadow-custom-green");
                    setAnimation(` animate-redGreen opacity-1`);
                }
            }
        } else if (matches.length > 1) {
            if (currentColor === "green") {
                if (transition === false) {
                    changeColor("bg-multipleMatches shadow-custom-orange", "bg-multipleMatches shadow-custom-orange");
                    setAnimation(" animate-appear opacity-0");
                }
                else {
                    changeColor("bg-noMatch shadow-custom-green", "bg-multipleMatches shadow-custom-orange");
                    setAnimation(` animate-greenOrange opacity-1`);
                }
            } else if (currentColor === "red") {
                if (transition === false) {
                    changeColor("bg-multipleMatches shadow-custom-orange", "bg-multipleMatches shadow-custom-orange");
                    setAnimation(" animate-appear opacity-0");
                }
                else {
                    changeColor("bg-oneMatch shadow-custom-red", "bg-multipleMatches shadow-custom-orange");
                    setAnimation(` animate-redOrange opacity-1`);
                }
            }
        } else {
            if (currentColor === "orange") {
                if (transition === false) {
                    changeColor("bg-oneMatch shadow-custom-red", "bg-oneMatch shadow-custom-red");
                    setAnimation(" animate-appear opacity-0");
                }
                else {
                    changeColor("bg-multipleMatches shadow-custom-orange", "bg-oneMatch shadow-custom-red");
                    setAnimation(` animate-orangeRed opacity-1`);
                }
            } else if (currentColor === "green") {
                if (transition === false) {
                    changeColor("bg-oneMatch shadow-custom-red", "bg-oneMatch shadow-custom-red");
                    setAnimation(" animate-appear opacity-0");
                }
                else {
                    changeColor("bg-noMatch shadow-custom-green", "bg-oneMatch shadow-custom-red");
                    setAnimation(` animate-greenRed opacity-1`);
                }
            }
        }
    }, [matches, currentColor, transition]);
    useEffect(() => {
        if (matches.length === 0) {
            setHintElement(null);
        }
        else if (matches.length > 1) {
            let hint = <p className="mb-4 text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs sm:text-sm">You seem to have a common WiFi name, so the result may not be as accurate.</p>;
            setHintElement(hint);
        }
        else {
            let hint = <p className="mb-4 text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs sm:text-sm">
            If you want to protect yourself, you can read the <span className="underline cursor-pointer hover:scale-105 transofrm inline-block transition-transform duration-300 ease-in-out" onClick={() => (setPage("Security tips"))}>security tips!</span></p>;
            setHintElement(hint);
        }
    }
    , [matches, setPage]);

    if (matches.length === 0) {
        return (
            <div id="no-match" className={"w-screen bg-noMatch shadow-custom-green mt-60 2xsm:mt-46 md:mt-28 flex items-center justify-start flex-col md:h-36 sm:h-28 h-20" + animation}>
                <h2 className="text-center font-semibold text-lg 2xsm:text-1xl xsm:text-2xl sm:text-3xl md:mt-3 sm:mt-1">No matches found - Great!</h2>
                <p className="text-center font-oxygenMono text-3xsm 2xsm:text-2xsm xsm:text-xs sm:text-sm md:mt-16 sm:mt-10 mt-5">If you want to feel safe feel free to read <span className="underline">security tips!</span></p>
            </div>
        );
    }
    let content: JSX.Element | null = null;

    let spanClasses: string = "font-semibold";
    let pClasses: string = "text-base 2xsm:text-md xsm:text-lg sm:text-xl text-center";

    if (matches.length > 1) {
        content = <div className="flex flex-col items-center justify-center sm:min-h-36 sm:mb-8 min-h-24 mb-6">
            <p className={pClasses + " mt-5 mb-2"}><span className={spanClasses}>Matches with their BSSID:</span></p>
            {matches.map((match, index) => (
                <p key={index} className={pClasses + " cursor-pointer hover:underline transition duration-300 hover:transform hover:scale-105"} onClick={() => setMatches([match])}>{match.ssid} - {match.bssid}</p>
            ))}
        </div>;
    } else {
        content = <div className="flex flex-col items-start justify-center sm:min-h-36 xsm:min-h-32 min-h-28 mt-2 xsm:mt-0 ">
            <p className={pClasses}><span className={spanClasses}>SSID:</span> {matches[0].ssid}</p>
            <p className={pClasses}><span className={spanClasses}>BSSID:</span> {matches[0].bssid} {vendor ? `(${vendor})` : ""}</p>
            <p className={pClasses}><span className={spanClasses}>Time:</span> {matches[0].timestamp}</p>
        </div>;
    }
    return (
        <div 
            key={matches.map(match => match.bssid).join()} 
            id="matches" 
            className={"w-screen mt-28 2xsm:mt-20 flex items-center justify-start flex-col pl-1 pr-1 " + bgColor + animation}
        >
            <h2 className="mt-3 text-center font-semibold text-xl 2xsm:text-2xl xsm:text-3xl sm:text-4xl">
                {matches.length > 1 ? "Multiple matches found" : "Match found"}
            </h2>
            {content}
            {hintElement}
        </div>
    );
}