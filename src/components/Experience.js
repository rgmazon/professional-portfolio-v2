import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Senior Web Developer - ABC Company</h3>
          <p>2018 - Present</p>
          <ul>
            <li>Led a team of 5 developers in creating responsive web applications</li>
            <li>Implemented modern front-end technologies to improve user experience</li>
            <li>Optimized website performance, resulting in a 40% increase in page load speed</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Junior Web Developer - XYZ Agency</h3>
          <p>2016 - 2018</p>
          <ul>
            <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
            <li>Collaborated with designers to implement pixel-perfect designs</li>
            <li>Assisted in the migration of legacy websites to modern frameworks</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;