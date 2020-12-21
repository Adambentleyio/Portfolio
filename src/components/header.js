import React from 'react';
import './header.css';
import { Link } from 'gatsby';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Header() {
    return (
    <div className="container__grid">
      <section className="logo header__link"> Logo</section>
      <main><h3>Placeholder </h3><p>...I'm not responsive yet</p></main>
      <section className="bio">
        <div>
        <h3>I'm Adam & I'm a commercial cinematographer, web developer & technical creative</h3>
        </div>
      </section>
      <div className="header__nav">
        <Link to="/contact" className="header__link" activeClassName="header__link-active">Contact</Link>
        <Link to="/" className="header__link" activeClassName="header__link-active">Home</Link>
      </div>
      <section className="yum">Yum</section>
      <div className="socials">
        <FaInstagram size="50px" />
        <FaFacebook size="50px" />
      </div>
      </div>

    )
  }