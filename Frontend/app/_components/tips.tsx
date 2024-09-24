"use client";

import React from "react";

export default function Tips({disappear}: {disappear: boolean| null}) {

    let animation = disappear ? "animate-disappear" : "animate-appear";

    return (
        <div className={"flex flex-col gap-2 mt-5 2xsm:gap-4 xsm:gap-6 sm:gap-8 md:gap-10 pb-10 md:w-10/12 w-11/12 " + animation}>
            <h1 className="text-center font-semibold text-xl 2xsm:text-2xl xsm:text-3xl sm:text-4xl xsm:mb-0 mb-5">Security Tips for WiFi Networks</h1>
            
            <div className="pr-10 gap-2 2xsm:gap-4 xsm:gap-6 sm:gap-8 md:gap-10 flex flex-col">
                
                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Why WiFi Security Matters</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    WiFi is the gateway to your devices and personal data. A compromised network can expose everything from your internet activity to sensitive personal information. Weak security settings, default passwords, and outdated encryption methods make your network an easy target for attackers.
                </p>

                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Use Strong, Random Passwords</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    The cornerstone of a secure WiFi network is a <span className="font-bold">strong, random password</span>. Many people make the mistake of using short or simple passwords like "password123" or leaving the default password provided by the router.
                </p>
                <ul className="list-disc 2xsm:ml-14 ml-12 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    <li className="sm:ml-6 ml-5"><span className="font-bold">Why are short or common passwords bad?</span> Short passwords can be cracked in seconds using modern tools, and common passwords are easily found in hacker password lists.</li>
                    <li className="sm:ml-6 ml-5"><span className="font-bold">Why is a random password good?</span> Humans are predictable and often base passwords on personal details. Randomly generated passwords eliminate this vulnerability.</li>
                    <li className="sm:ml-6 ml-5"><span className="font-bold">What makes a strong password?</span> A strong WiFi password should be at least 12-16 characters long and include a mix of letters, numbers, and symbols.</li>
                </ul>

                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Enable WPA3 Encryption</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    WiFi encryption protects the data between your devices and the router. The latest standard, <span className="font-bold">WPA3</span>, is the most secure option available.
                </p>
                <ul className="list-disc 2xsm:ml-14 ml-12 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    <li className="sm:ml-6 ml-5"><span className="font-bold">Why not WPA2 or WEP?</span> Older encryption methods are insecure. WPA2 has vulnerabilities, and WEP can be cracked within minutes.</li>
                    <li className="sm:ml-6 ml-5"><span className="font-bold">How to enable WPA3?</span> Check your router's settings under the "Wireless" or "Security" section to enable WPA3. If it's unavailable, use WPA2 and consider upgrading your router.</li>
                </ul>

                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Regularly Update Your Router's Firmware</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    Firmware updates often include important security patches that prevent attackers from exploiting weaknesses in your router.
                </p>
                <ul className="list-disc 2xsm:ml-14 ml-12 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    <li className="sm:ml-6 ml-5"><span className="font-bold">Why are firmware updates important?</span> Older routers with unpatched vulnerabilities can be exploited by hackers.</li>
                    <li className="sm:ml-6 ml-5"><span className="font-bold">How to update firmware?</span> Check your router’s manual or manufacturer’s website for instructions. Many modern routers have an auto-update option.</li>
                </ul>

                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Disable WPS (WiFi Protected Setup)</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    WiFi Protected Setup (WPS) is a feature meant to make connecting devices easier but has serious security flaws.
                </p>
                <ul className="list-disc 2xsm:ml-14 ml-12 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    <li className="sm:ml-6 ml-5"><span className="font-bold">Why is WPS risky?</span> The PIN used in WPS is vulnerable to guessing attacks. Disabling this feature closes a significant security loophole.</li>
                </ul>

                <h2 className="text-left 2xsm:ml-6 ml-4 font-semibold text-base 2xsm:text-lg xsm:text-xl sm:text-2xl">Change Your Router's Default Admin Password</h2>
                <p className="text-left 2xsm:ml-10 ml-8 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    Most routers come with default login credentials, which are well-known and often included in hacker lists.
                </p>
                <ul className="list-disc 2xsm:ml-14 ml-12 font-roboto text-xs 2xsm:text-sm xsm:text-base md:text-lg">
                    <li className="sm:ml-6 ml-5"><span className="font-bold">Why is this important?</span> If someone gains access to your router’s admin panel, they can change settings and compromise your network.</li>
                    <li className="sm:ml-6 ml-5"><span className="font-bold">How to change it?</span> Log into your router’s admin page, and look for the "Administration" or "Security" settings to update the password.</li>
                </ul>
            </div>
        </div>
    );
}
