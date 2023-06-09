import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
      <Hero></Hero>
      {/* Hero should have a button that takes to the about page */}
      <Carousel />
      <section id="skills">
        <div class="container">
          <h2>Skills</h2>
          <div class="skill-category">
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vue.js</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Back-End Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Version Control</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div class="additional-skills">
            <h3>Additional Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Wireframing and Prototyping</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
