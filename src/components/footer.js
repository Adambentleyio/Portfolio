import React from 'react';

export default function Footer( props ) {
    return (
        <div>
            <h3> I am the {props.noun}</h3>
        </div>
    )
}

Footer.defaultProps = {
    noun: "Footer"
}