import React from 'react';
import Section from './../components/Section'

const Contact = props => {
    return (
        <Section class="flex flex-col items-center pt-36 h-36">
            <p class="font-title text-6xl text-primary mb-3 mt-3 hover:bg-shadow">reach out to me</p>
            <p class="font-title text-xl text-center text-primary mb-6">I'd love to chat!</p>
            <p class="font-text text-text w-2/5 text-center">I’m currently looking for new opportunities and would love to work in an exciting team with cool ideas. Hit me up!</p>
            <button class="mt-10 bg-primary hover:bg-shadow border-primary w-48 h-10 rounded-lg border-opacity-50 text-background font-title shadow-lg animate-bounce">
                resume
            </button>
        </Section>
    )
};

export default Contact;