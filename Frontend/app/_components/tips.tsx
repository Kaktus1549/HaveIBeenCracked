"use client";

import React from "react";

export default function Tips() {
    return(
        <div className="flex flex-col gap-2 mt-5 2xsm:gap-4 xsm:gap-6 sm:gap-8 md:gap-10 pb-10 w-full">
            <h1 className="text-center font-semibold text-xl 2xsm:text-2xl xsm:text-3xl sm:text-4xl xsm:mb-0 mb-5">About HaveIBeenCracked</h1>
            <div id="tesxt" className="pr-10 gap-2 2xsm:gap-4 xsm:gap-6 sm:gap-8 md:gap-10 flex flex-col">
                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">What is HaveIBeenCracked?</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    <span className="font-bold">HaveIBeenCracked</span> is an open-source project designed to help users understand the importance of <span className="font-bold">secure passwords</span>, particularly for <span className="font-bold">WiFi networks</span>. By searching for a WiFi network's <span className="font-bold">SSID</span> or <span className="font-bold">BSSID</span> in a database of <span className="font-bold">pwned WiFi networks</span>, users can quickly check if their network has been <span className="font-bold">compromised</span>. The database includes the <span className="font-bold">SSID</span>, <span className="font-bold">BSSID</span>, and the <span className="font-bold">time when the network was first flagged</span>. The goal is to encourage <span className="font-bold">better security practices</span>, such as avoiding <span className="font-bold">weak passwords</span> like "00000" that are easily cracked.
                </p>
                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Why I created it?</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    I was inspired by the popular service <span className="font-bold">HaveIBeenPwned</span>, which alerts users if their personal information has been exposed in data breaches. While <span className="font-bold">HaveIBeenPwned</span> focuses on personal data, I noticed a gap when it came to WiFi networks. Many people still use weak or default passwords for their WiFi, making them easy targets for attackers. I created <span className="font-bold">HaveIBeenCracked</span> to show people that WiFi security is not just a "cool word" but an essential part of protecting their privacy and devices.
                </p>
                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">How to use it?</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    Using <span className="font-bold">HaveIBeenCracked</span> is simple. You can search for your WiFi network by either its <span className="font-bold">SSID</span> (WiFi name) or <span className="font-bold">BSSID</span> (the unique identifier of the WiFi router). Once you search, the tool checks the database for any records of compromised networks. If your network is listed, it means it was found online with weak security settings, and you should update your WiFi password to something more secure immediately.
                </p>
            </div>
        </div>
    );
}