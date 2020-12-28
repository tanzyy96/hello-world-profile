import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition"

const Home = props => {

    const texts = [
        "excited by ideas.",
        "inspired by hard work.",
        "in love with creativity.",
        "Zhi Yang :D"
    ]

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() =>
            setTimer(time => time + 1),
            3000 // every 1 second
        )
    }, []);




    return (
        <div class="w-screen h-screen bg-background flex justify-center items-center">
            {/* <Layout /> */}
            <div class="h-auto w-3/5">
                <div class="h-36 flex items-center">
                    <div class="absolute text-9xl text-primary font-title z-20">
                        hi there.
                    </div>
                    <div class="absolute z-10 h-20 w-3/5 flex flex-row">
                        <div class="bg-shadow h-full w-4/5 mr-5"></div>
                        <div class="bg-shadow h-full w-8 mr-5"></div>
                        <div class="bg-shadow h-full w-8 mr-5"></div>
                    </div>
                </div>
                <div class="pl-2">
                    <span class="font-title text-secondary text-6xl mr-4">
                        I am
                    </span>
                    <span class="font-title text-secondary text-6xl w-24">
                        <TextTransition
                            text={texts[timer % texts.length]}
                            springConfig={presets.gentle}
                            inline={true}
                        />
                    </span>
                </div>
            </div>
        </div >
    )
};

export default Home;