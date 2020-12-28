import React from 'react';
import Section from './../components/Section'

const Portfolio = props => {

    return (
        <Section>
            <div class="absolute h-2/5 w-2/6 right-48 pl-10 pt-20">
                <img src={require("./../assets/bifrost.gif")} class="h-48 w-48 mb-5 shadow-xl transform duration-150 ease-in-out hover:scale-110" />
                <img src={require("./../assets/autocad.svg")} class="bg-white h-48 w-48 shadow-xl" />
            </div>
            <div class="absolute h-2/5 w-2/6 left-48 text-right">
                <p class="font-title">my exciting</p>
                <p class="font-title text-6xl mb-12">experiences</p>
                <div class="mb-28">
                    <p class="font-title text-xl mb-2 text-primary"># BIFROST.AI</p>
                    <p>Initial launch team for <a href="datasets.bifrost.ai">datasets.bifrost.ai</a></p>
                    <p>Built using ReactJS, TailwindCSS on top of GatsbyJS</p>
                    <p>and GraphQL. That's how I learnt to build this!</p>
                </div>
                <div class="mb-5">
                    <p class="font-title text-xl mb-2 text-primary"># AUTOCAD WEB</p>
                    <p>Developed internal tools for the AutoCAD Web team,</p>
                    <p>including research on Clang compiler</p>
                </div>
            </div>
        </Section>
    )
};

export default Portfolio;