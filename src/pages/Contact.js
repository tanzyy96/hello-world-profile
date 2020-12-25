import React from 'react';
import Section from './../components/Section'

const Contact = props => {
    return (
        <Section class="flex flex-col items-center pt-36 h-36">
            <p class="font-subtitle text-6xl text-primary bg-red-100 mb-3 mt-3">reach out to me</p>
            <p class="font-subtitle text-xl text-center text-primary mb-6">I'd love to chat!</p>
            <p class="font-text text-text w-2/5 text-center">I’m currently looking for new opportunities and would love to work in an exciting team with cool ideas. Hit me up!</p>
            <div class="mt-10 border-2 border-primary w-48 h-10 rounded-lg border-opacity-50 text-primary  font-subtitle flex justify-center items-center shadow-md hover:shadow-2xl hover:text-secondary">
                resume
            </div>
        </Section>
    )
};

export default Contact;