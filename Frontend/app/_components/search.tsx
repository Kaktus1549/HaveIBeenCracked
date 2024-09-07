"use client";

import React from "react";

export default function Search() {
    return(
        <div id="search" className="flex flex-row justify-center w-full mt-16">
            <input type="text" className="w-5/12 h-14 p-2 border border-gray-400 search-input text-black bg-searchBar placeholder:text-xl placeholder:text-black" placeholder="Enter your WiFi name" />
            <button className="p-2 text-white search-button bg-button w-1/12 text-2xl hover:bg-buttonHover transition duration-300">Search</button>
        </div>
    );
};