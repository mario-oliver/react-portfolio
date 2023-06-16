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
              <li>Next.js</li>
              <li>Tailwind.js</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Back-End Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>API Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>Postman</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Database Management</h3>
            <ul>
              <li>MySQL & PostgressSQL</li>
              <li>Pinecone - Vector-based</li>
              <li>Cassandra</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>AWS ???</li>
              <li>AWS Document Based</li>
              <li>Glacier</li>
              <li>Postman</li>
              <li>Numpy (Data Science)</li>
            </ul>
          </div>

          <div class="skill-category">
            <h3>Infrastructure</h3>
            <ul>
              <li>Git</li>
              <li>AWS - S3</li>
              <li>AWS - EC2</li>
              <li>AWS - ECS Cluster Mgmt</li>
              <li>AWS - Cloudwatch</li>
              <li>AWS - Route53</li>
              <li>AWS - S3</li>
              <li>Terraform</li>
            </ul>
          </div>

          <div class="additional-skills">
            <h3>Additional Skills</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
