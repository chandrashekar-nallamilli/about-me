import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Chandra Shekar Nallamilli via email @ chandrashekar.nallamilli@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p><a href="mailto:chandrashekar.nallamilli@gmail.com">chandrashekar.nallamilli@gmail.com</a></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
