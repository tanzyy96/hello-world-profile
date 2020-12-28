import React from 'react';

const Section = props => {
    // Sets default width and height for each section

    return (
        <div class={"w-screen h-section bg-background flex " + props.class}>
            {props.children}
        </div>
    )
};

export default Section;