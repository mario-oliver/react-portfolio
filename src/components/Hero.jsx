import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaHandPeace } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1 className="title">Mario Oliver</h1>

        <p className="text ">
          Hi there <FaHandPeace className="inline-icon"></FaHandPeace> I was
          destined to create, and I wield the powerful tools of programming,
          managing blinking boxes, motion graphics, design, and storytelling to
          bring my visions to life.
        </p>
        <FaQuoteLeft className="hero-icon"></FaQuoteLeft>
        <FaQuoteRight className="hero-icon"></FaQuoteRight>
      </div>
    </section>
  );
};

export default Hero;
