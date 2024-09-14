"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const [selected, setSelected] = useState<string>("Home");
    const [hovered, setHovered] = useState<string | null>(null);
    const [boxPosition, setBoxPosition] = useState<number>(0);
    const [boxWidth, setBoxWidth] = useState<number>(0);

    const buttons = ["Home", "About", "Security tips"];
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Update box position and width based on hovered or selected button
    useEffect(() => {
        const activeButton = buttonRefs.current[hovered ? buttons.indexOf(hovered) : buttons.indexOf(selected)];
        if (activeButton) {
            setBoxPosition(activeButton.offsetLeft);
            setBoxWidth(activeButton.offsetWidth);
        }
    }, [hovered, selected, buttons]);

    useEffect(() => {
        const resizeListener = () => {
            const activeButton = buttonRefs.current[hovered ? buttons.indexOf(hovered) : buttons.indexOf(selected)];
            if (activeButton) {
                setBoxPosition(activeButton.offsetLeft);
                setBoxWidth(activeButton.offsetWidth);
            }
        };
        window.addEventListener("resize", resizeListener);
        return () => window.removeEventListener("resize", resizeListener);
    })

    const bookmarkClass = "relative z-20 text-center text-white md:text-2xl md:font-medium md:h-4/6 sm:text-xl 2xsm:text-lg sm:h-5/6 h-4/6 text-base ";
    const bookmarkDivs = "flex justify-center items-center relative md:h-5/6 md:gap-9 sm:gap-6 gap-4 h-full";
    
    return (
        <header className="flex flex-row w-full justify-center items-center md:h-20 sm:h-16 2xsm:h-16 xsm:justify-between h-14">
            <div id="bookmarks" className={bookmarkDivs + " xsm:ml-8"}>
                {buttons.map((button, index) => (
                    <button
                        key={button}
                        ref={(el) => {
                            buttonRefs.current[index] = el;
                        }}
                        onClick={() => setSelected(button)}
                        onMouseEnter={() => setHovered(button)}
                        onMouseLeave={() => setHovered(null)}
                        className={bookmarkClass + (selected === button ? " text-white" : " text-gray-400")}
                    >
                        {button}
                    </button>
                ))}
                <div
                    className="absolute top-1/2 left-0 rounded-lg transition-all duration-300 ease-in-out md:h-4/6 -z-10 bg-selector sm:h-4/6 xsm:h-4/6 h-1/2"
                    style={{
                        transform: `translate(${boxPosition - 9}px, -50%)`,
                        width: `${boxWidth + 18}px`,
                        willChange: "transform, width, opacity",
                    }}
                />
            </div>
            {/* In future make it dropdown */}
            <div id="login" className={bookmarkDivs + " mr-10 xsm:flex hidden"}>
                <button className={bookmarkClass}>Login</button>
            </div>
        </header>
    );
}