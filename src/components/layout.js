import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './layout.css';
import 'normalize.css';
import { Link } from 'gatsby';


// Layout component will render on each page
// that is wrapped with <Layout>. As The Layout component
// displays components we need to tell the function is accepts
// props { children }

export default function Layout({ children }) {
    return (
        <div>
            <GlobalStyles>
            <Header />
            <div className="header__nav">
                <Link to="/contact" className="header__link" activeClassName="header__link-active">Contact</Link>
                <Link to="/" className="header__link" activeClassName="header__link-active">Home</Link>
            </div>
            {children}
            <Footer noun="God Damn Footer" />
            </GlobalStyles>
        </div>
    )
}