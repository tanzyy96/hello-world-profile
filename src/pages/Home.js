import React, { useLayoutEffect, useRef, useState } from 'react';

const Home = props => {

    return (
        <div class="w-screen h-screen bg-secondary flex justify-center items-center">
            {/* <Layout /> */}
            <div class="h-auto w-3/5">
                <div class="h-48 flex items-center">
                    <div class="absolute text-9xl text-primary font-title z-20">
                        hi there.
                    </div>
                    <div class="absolute z-10 h-20 w-3/5 flex flex-row">
                        <div class="bg-red-100 h-full w-4/5 mr-5"></div>
                        <div class="bg-red-100 h-full w-8 mr-5"></div>
                        <div class="bg-red-100 h-full w-8 mr-5"></div>
                    </div>
                </div>
                <div class="font-title text-primary">
                    my name is
                </div>
                <div class="text-5xl pb-5 font-title text-contrast-100">
                    Zhi Yang.
                </div>
                <div class="flex flex-col text-text">
                    <p>I am</p>
                    <p>Excited about innovation.</p>
                    <p>Passionate about exploration.</p>
                </div>
            </div>
        </div >
    )
};

export default Home;