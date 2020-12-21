import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    padding: 2rem;
    background-color: var(--bg-primary);
`

export default function Footer( props ) {
    return (
        <div>
            <FooterStyle>
            <h3> I am the {props.noun}</h3>
            </FooterStyle>

        </div>
    )
}

Footer.defaultProps = {
    noun: "Footer"
}