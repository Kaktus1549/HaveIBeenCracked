"use client";

import React from "react";

export default function Navbar() {
    const bookmarkClass = "text-center text-white text-2xl font-medium";
    const bookmarkDivs = "flex justify-center h-5/6 gap-9 items-center";
    return(
        <header className="flex flex-row w-full justify-between h-20 items-center">
            <div id="bookmarks" className={bookmarkDivs + " ml-8"}>
                <a className={bookmarkClass}>Home</a>
                <a className={bookmarkClass}>About</a>
                <a className={bookmarkClass}>Notify me</a>
            </div>
            <div id="login" className={bookmarkDivs + " mr-10"}>
                <a className={bookmarkClass}>Login</a>
            </div>
        </header>
    );
};