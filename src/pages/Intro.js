import React, { useState, useEffect, useRef } from 'react';
import Section from './../components/Section'

const Intro = props => {

    const [show, setShow] = useState(false)
    // const [, set] = useState();
    const ref = useRef(null)

    const callback = entry => {
        alert("pass threshold?")
    }

    const observer = new IntersectionObserver(callback, {
        root: this.ref.current,
        threshold: new Array(101).fill(0).map((v, i) => i * 0.01) // creates threshold with increments of 0.01
    })

    useEffect(() => {
        observer.observe(ref.current)
    }, []);

    return (
        <Section >
            <div class="absolute h-2/5 w-2/6 left-48" ref={ref}>
                <img src={require("./../assets/me.jpg")} class="h-96 rounded-xl" />
            </div>
            <div class="absolute h-2/5 w-2/6 right-48">
                <p class="font-title text-secondary">a little bit more</p>
                <p class="font-title text-secondary text-6xl mb-8">about me</p>
                <p class="text-secondary mb-5 font-sans">hi! I’m Zhi Yang, a final-year student studying Computer Science in Nanyang Technological University, Singapore.</p>

                <p class="text-secondary mb-5 font-sans">I love learning about new and cool stuff people make using a bit of coding and a whole of creativity!</p>

                <p class="text-secondary mb-5 font-sans">From building websites with ReactJS and TailwindCSS to mobile development with Android Development, I love seeing how ideas can become reality so quickly! </p>
            </div>
        </Section>
    )
};

export default Intro;



