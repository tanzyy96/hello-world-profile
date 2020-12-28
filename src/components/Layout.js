import React, { useEffect, useState } from 'react';

const Layout = props => {

    return (
        <div class="fixed h-screen w-screen z-40">
            <div class="fixed h-screen w-8 left-0 bg-white"></div>
            <div class="fixed h-screen w-8 right-0 bg-white"></div>
            <div class="fixed w-screen h-8 top-0 bg-white text-primary text-center pt-2"></div>
            <div class="fixed w-screen h-8 bottom-0 bg-white">
                <div class="flex flex-row h-full space-x-10 justify-center items-center">
                    <img src={require("./../assets/mail@2x.png")} class="color-primary h-5 w-5 origin-bottom transform duration-150 ease-in-out hover:scale-300 hover:-translate-y-1" />
                    <img src={require("./../assets/git@2x.png")} class="h-5 w-5 origin-bottom transform duration-150 ease-in-out hover:scale-300 hover:-translate-y-1" />
                    <img src={require("./../assets/linkedin@2x.png")} class="h-5 w-5 origin-bottom transform duration-200 ease-in-out hover:scale-300 hover:-translate-y-1" />
                    <img src={require("./../assets/instagram@2x.png")} class="h-5 w-5 origin-bottom transform duration-200 ease-in-out hover:scale-300 hover:-translate-y-1" />
                </div>
            </div>
        </div>
    )
};

export default Layout;