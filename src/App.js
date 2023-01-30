import './App.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import cvphoto from './cvphoto.jpg';

function App() {
  return (
    <div className="main">
      <div className="heading">
        <div className="main-text">
          <img src={cvphoto} alt="cover" className="photo" />
          <div>
            <h1>Aidan Ryan</h1>
            <h3>Web Developer</h3>
          </div>
        </div>
        <div>
          <ul className="contact-list">
            <li>
              <PhoneIcon /> +43 650 4732801
            </li>
            <li>
              <EmailIcon />
              <a
                href="mailto: aidoryan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                aidoryan@gmail.com
              </a>
            </li>
            <li>
              <LinkedInIcon />
              <a
                href="//www.linkedin.com/in/aido-ryan"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/aido-ryan
              </a>
            </li>
            <li>
              <LocationOnIcon />
              Vienna, Austria
            </li>
          </ul>
        </div>
      </div>
      <main class="body-page">
        <div class="page-left">
          <h2>EXPERIENCE</h2>
          <div className="experience-container">
            <h3>Junior Web Developer / Graduate</h3>
            <p>
              Brainnest Frontend Development Industry Training
              <br />
              09/2022 - 10/2022
              <ul className="experience-container-list">
                <div className="experience-container-list-text">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Projects available on GitHub</li>
                  <li>https://github.com/Aido12</li>
                </div>
              </ul>
            </p>
          </div>
          <div className="experience-container">
            <h3>Junior Web Developer / Graduate</h3>
            <p>
              Brainnest Frontend Development Industry Training
              <br />
              09/2022 - 10/2022
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Projects available on GitHub</li>
                <li>https://github.com/Aido12</li>
              </ul>
            </p>
          </div>
          <div className="experience-container">
            <h3>Junior Web Developer / Graduate</h3>
            <p>
              Brainnest Frontend Development Industry Training
              <br />
              09/2022 - 10/2022
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Projects available on GitHub</li>
                <li>https://github.com/Aido12</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="page-right">
          <h2>SUMMARY</h2>
          <p>
            I am Aidan a Full Stack Web Developer with sales and gastronomy
            experience. I am a positive-thinking team player with a can-do
            attitude. I am a friendly, independent, and dedicated person focused
            on progressing in the industry. Recently I have worked with a
            company, AIoT Hub, where I worked on designing and implementing
            their website using mainly React and Javascript, as well as WebFlow.
            I have since completed a Front-End Development course and I am also
            working with WordPress and plugins such as Elemetor and WooCommerce.
          </p>
          <h2>SKILLS</h2>
          <h4>TECHSKILLS</h4>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>TypeScipt, React, Next.js</li>
            <li>PostgresSQL, Node.js</li>
            <li>Git, GitHub</li>
            <li>WordPress</li>
          </ul>
          <h4>SOFTSKILLS</h4>
          <ul>
            <li> Ability to work in a team</li>
            <li>Communication</li>
            <li>Decision making</li>
            <li> Stress management</li>
          </ul>
          <h4>LANGUAGES</h4>
          <div className="page-right-languages">
            <p>
              English <br /> German(b1)
            </p>
            <p>
              Native <br />
              Intermediate
            </p>
          </div>
          <h4>EDUCATION</h4>
          <div className="education">
            <ul className="education-list">
              <div className="education-list-text">
                <li>Ibis Acam Wien</li>
                <li>2022</li>
                <li>B1 Intensiv Deutsch Sprachkurs</li>
              </div>
            </ul>
            <ul className="education-list">
              <div className="education-list-text">
                <li>St Davids CBS, Artane, Dublin, Ireland</li>
                <li>1999</li>
                <li>Leaving Certifcate(Matura)</li>
              </div>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
