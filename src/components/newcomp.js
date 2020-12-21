import React from 'react';
import styled from 'Styled-components';

const Container = styled.div`
    padding: 20px 10px;
`

export default function NewComp() {
    return (
        <Container>
            <p> I'm a p tag in a style component </p>
        </Container>
    )
}