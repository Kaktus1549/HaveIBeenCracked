import React, { useState, useEffect } from "react";
import { getSearchResults, getVendor } from "../api/api";

export default function Search({setMatches, matchesList, setTransition, setColor}: {setMatches: (newMatches: WiFiMatch[]) => void, matchesList: WiFiMatch[] | null, setTransition: (transition: boolean) => void, setColor: (color: string) => void}) {
    const bigScreenPlaceholder = "Enter your WiFi name or BSSID";
    const smallScreenPlaceholder = "WiFi name or BSSID";
    const [placeholder, setPlaceholder] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const resizeListener = () => {
            setPlaceholder(window.innerWidth > 415 ? bigScreenPlaceholder : smallScreenPlaceholder);
        };

        // Call resizeListener on initial render to set placeholder
        resizeListener();

        // Add resize event listener
        window.addEventListener("resize", resizeListener);

        // Clean up the event listener on unmount
        return () => window.removeEventListener("resize", resizeListener);
    }, []); 

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            search((document.getElementById("searchBar") as HTMLInputElement).value);
          }
        };
        document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

    // Function to convert numeric BSSID to MAC address
    function numberToMac(bssidNum: bigint | null): string {
        // Convert the number to a hexadecimal string, then pad it to 12 characters
        if (bssidNum === null) {
            return '';
        }
        let hexStr = bssidNum.toString(16).padStart(12, '0');
        
        // Format it as a MAC address (XX:XX:XX:XX:XX:XX)
        return hexStr.match(/.{1,2}/g)?.join(':') ?? '';
    }

    async function search(string: string){
        setLoading(true);
        let matches = await getSearchResults(string);
        let newMatches: WiFiMatch[] = [];
        await Promise.all(matches.map(async (match) => {
            let mac = numberToMac(match.BSSID)
            let vendor: string = ""
            if (matches.length === 1){
                vendor = await getVendor(mac);
            }
            newMatches.push({
                ssid: match.ESSID ?? "",
                bssid: mac,
                vendor: vendor,
                // Time needs only to be date, not time
                // Example: 18-09-2021
                timestamp: match.time?.toLocaleDateString() ?? ""
            });
        }));
        if (matchesList === null){
            setTransition(false);
        }
        else {
            setTransition(true);
            setColor(matchesList.length === 1 ? "red" : matchesList.length > 1 ? "orange" : "green");
        }
        setMatches([...newMatches]);
        setLoading(false);
    }

    return (
        <div id="search" className="flex flex-row justify-center w-full mt-2 2xsm:mt-5 xsm:mt-8 sm:mt-14 md:mt-16">
            <input
                id="searchBar"
                type="text"
                className="p-2 border border-gray-400 search-input text-black bg-searchBar placeholder:text-sm placeholder:2xsm:text-base placeholder:xsm:text-lg placeholder:sm:text-xl placeholder:text-black lg:w-5/12 lg:h-14 md:w-7/12 md:h-14 sm:w-8/12 sm:h-12 xsm:w-8/12 xsm:h-11 2xsm:w-7/12 2xsm:h-10 h-9 w-8/12 focus:outline-none focus:ring-0 focus:border-gray-400"
                placeholder={placeholder}
            />
            <button className="text-white search-button bg-button text-lg 2xsm:text-xl sm:text-2xl hover:bg-buttonHover transition duration-300 lg:w-1/12 lg:h-14 md:w-2/12 md:h-14 sm:w-2/12 sm:h-12 xsm:w-2/12 xsm:h-11 2xsm:w-3/12 2xsm:h-10 h-9 w-3/12" onClick={() => search((document.getElementById("searchBar") as HTMLInputElement).value)}>
                <span className="text-center flex items-center justify-center">
                    { loading === true ?
                    <div className="spinner md:h-12 md:w-12 xsm:h-10 xsm:w-10 md:border-8 sm:border-6 xsm:border-5 border-4 border-solid h-8 w-8">
                    </div>
                    :
                    <span className="text-center">Search</span>
                    }
                </span>
            </button>
        </div>
    );
}