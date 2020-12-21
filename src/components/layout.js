import React from 'react';
import 'normalize.css';
import styled from 'Styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import GlobalStyles from '../Styles/GlobalStyles';
import { Link } from 'gatsby';



// Layout component will render on each page
// that is wrapped with <Layout>. As The Layout component
// displays components we need to tell the function is accepts
// props { children }

const ContentStyles = styled.div`
    padding: 2rem;
`

export default function Layout({ children }) {
    return (
            <div>
            <GlobalStyles />
            <Header />
            <ContentStyles>

            {children}
            </ContentStyles>
            <Footer noun="God Damn Footer" />
            </div>
    )
}