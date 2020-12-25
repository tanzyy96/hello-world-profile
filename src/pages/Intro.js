import React, { useState, useEffect } from 'react';
import Section from './../components/Section'

const Intro = props => {

    const [show, setShow] = useState(false)

    return (
        <Section>
            <div class="absolute h-2/5 w-2/6 left-48">
                <img src={require("./../assets/me.jpg")} class="h-96 rounded-xl" />
            </div>
            <div class="absolute h-2/5 w-2/6 right-48">
                <p class="font-subtitle">little bit more</p>
                <p class="font-subtitle text-6xl mb-8 mt-2">about me</p>
                <p class="text-text mb-5">hi! I’m Zhi Yang, a final-year student studying Computer Science in Nanyang Technological University, Singapore.</p>

                <p class="text-text mb-5">I love learning about new and cool stuff people make using a bit of coding and a whole of creativity!</p>

                <p class="text-text mb-5">From building websites with ReactJS and TailwindCSS to mobile development with Android Development, I love seeing how ideas can become reality so quickly! </p>
            </div>
        </Section>
    )
};

export default Intro;



