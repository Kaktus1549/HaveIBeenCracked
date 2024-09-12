import React, { useState, useEffect } from "react";

export default function Search() {
    const bigScreenPlaceholder = "Enter your WiFi name or BSSID";
    const smallScreenPlaceholder = "WiFi name or BSSID";
    const [placeholder, setPlaceholder] = useState("");

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

    return (
        <div id="search" className="flex flex-row justify-center w-full mt-2 2xsm:mt-5 xsm:mt-8 sm:mt-14 md:mt-16">
            <input
                type="text"
                className="p-2 border border-gray-400 search-input text-black bg-searchBar placeholder:text-sm placeholder:2xsm:text-base placeholder:xsm:text-lg placeholder:sm:text-xl placeholder:text-black lg:w-5/12 lg:h-14 md:w-7/12 md:h-14 sm:w-8/12 sm:h-12 xsm:w-8/12 xsm:h-11 2xsm:w-7/12 2xsm:h-10 h-9 w-8/12"
                placeholder={placeholder}
            />
            <button className="text-white search-button bg-button text-lg 2xsm:text-xl sm:text-2xl hover:bg-buttonHover transition duration-300 lg:w-1/12 lg:h-14 md:w-2/12 md:h-14 sm:w-2/12 sm:h-12 xsm:w-2/12 xsm:h-11 2xsm:w-3/12 2xsm:h-10 h-9 w-3/12">
                <span className="text-center">Search</span>
            </button>
        </div>
    );
}