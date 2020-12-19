import React from 'react';
import Header from '../components/header';
import './layout.css';
import { Link } from 'gatsby'

// Layout component will render on each page
// that is wrapped with <Layout>. As The Layout component
// displays components we need to tell the function is accepts
// props { children }

export default function Layout({ children }) {
    return (
        <div className="header">
            <Header />
            <div className="header__nav">
                <Link to="/contact" className="header__link" activeClassName="header__link-active">Contact</Link>
                <Link to="/" className="header__link" activeClassName="header__link-active">Home</Link>
            </div>
            {children}
        </div>
    )
}