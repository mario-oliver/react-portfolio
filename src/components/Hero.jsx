import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaHandPeace } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner">
        <h1 className="title">PLACEHOLDER</h1>
        <div className="quote-icons">
          <FaQuoteLeft className="hero-icon"></FaQuoteLeft>
          <p className="text">
            Hi there <FaHandPeace className="inline-icon"></FaHandPeace> I was
            destined to create, and I wield the powerful tools of programming,
            managing blinking boxes, motion graphics, design, and storytelling
            to bring my visions to life.
          </p>
          <FaQuoteRight className="hero-icon"></FaQuoteRight>
        </div>
      </div>
    </section>
  );
};

export default Hero;
