/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/photo.png`} alt="" />
      </Link>
      <header>
        <h2>Chandra Shekar Nallamilli</h2>
        <p><a href="mailto:chandrashekar.nallamilli@gmail.com">chandrashekar.nallamilli@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Chandra Shekar. I am a Solution Architect at <a href="https://www.tv2.no/">TV2 Norge AS</a>, Norway&apos;s largest private media company,
        specializing in <a href="https://aws.amazon.com/">AWS</a> and <a href="https://azure.microsoft.com/">Azure</a> solutions
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Chandra Shekar Nallamilli <Link to="/">chandrashekar.uk</Link>.</p>
    </section>
  </section>
);

export default SideBar;
