"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const [selected, setSelected] = useState<string>("Home");
    const [hovered, setHovered] = useState<string | null>(null);
    const [boxPosition, setBoxPosition] = useState<number>(0);
    const [boxWidth, setBoxWidth] = useState<number>(0);

    const buttons = ["Home", "About", "Notify me"];
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    // Update box position and width based on hovered or selected button
    useEffect(() => {
        const activeButton = buttonRefs.current[hovered ? buttons.indexOf(hovered) : buttons.indexOf(selected)];
        if (activeButton) {
            setBoxPosition(activeButton.offsetLeft);
            setBoxWidth(activeButton.offsetWidth);
        }
    }, [hovered, selected, buttons]);

    const bookmarkClass = "relative z-20 text-center text-white text-2xl font-medium";
    const bookmarkDivs = "flex justify-center h-5/6 gap-9 items-center relative";

    return (
        <header className="flex flex-row w-full justify-between h-20 items-center">
            <div id="bookmarks" className={bookmarkDivs + " ml-8"}>
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
                {/* Animated background for hover, needs fix for color flicking */}
                <div
                    className="absolute top-1/2 left-0 rounded-lg transition-all duration-300 ease-in-out h-4/6 -z-10 bg-selector"
                    style={{
                        transform: `translate(${boxPosition - 9}px, -50%)`,
                        width: `${boxWidth + 18}px`,
                        willChange: "transform, width, opacity",
                    }}
                />
            </div>
            {/* In future make it dropdown */}
            <div id="login" className={bookmarkDivs + " mr-10"}>
                <button className={bookmarkClass}>Login</button>
            </div>
        </header>
    );
}