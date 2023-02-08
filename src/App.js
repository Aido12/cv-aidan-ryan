import './App.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import cvphoto from './cvphoto.jpg';
import { array } from './expierenceData';

console.log();
function App() {
  return (
    <div className="main">
      <div className="heading">
        <div className="main-text">
          <img src={cvphoto} alt="cover" className="photo" />
          <div>
            <h1>Aidan Ryan</h1>
            <h3 className="job-title">Web Developer</h3>
          </div>
        </div>
        <div>
          <ul className="contact-list">
            <div>
              <li>
                <PhoneIcon fontSize="small" /> &nbsp;+43 650 4732801
              </li>
              <li>
                <EmailIcon fontSize="small" />
                <a
                  href="mailto: aidoryan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-list-text"
                >
                  &nbsp; aidoryan@gmail.com
                </a>
              </li>
              <li>
                <LinkedInIcon fontSize="small" />
                <a
                  href="//www.linkedin.com/in/aido-ryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-list-text"
                >
                  &nbsp; linkedin.com/in/aido-ryan
                </a>
              </li>
              <li>
                <LocationOnIcon fontSize="small" />
                &nbsp; Vienna, Austria
              </li>
            </div>
          </ul>
        </div>
      </div>
      <main class="body-page">
        <div class="page-left">
          <h2>EXPERIENCE</h2>
          {array.map((item, index) => {
            return (
              <div key={index} className="experience-container">
                <h3>{item.title}</h3>
                <p>
                  {item.company}
                  <br />
                  <div className="exp-date">{item.date}</div>
                  <ul className="experience-container-list">
                    <div className="experience-container-list-text">
                      <li>{item.skill1}</li>
                      <li>{item.skill2}</li>
                      <li>{item.skill3}</li>
                      <li>{item.skill4 || ''}</li>
                      <li>{item.skill5}</li>
                    </div>
                  </ul>
                </p>
              </div>
            );
          })}
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
          <h3>SKILLS</h3>
          <h4>TECHSKILLS</h4>
          <ul className="skills-container-list">
            <div className="skills-container-list-text">
              <li>HTML, CSS, JavaScript</li>
              <li>TypeScipt, React, Next.js</li>
              <li>PostgresSQL, Node.js</li>
              <li>Git, GitHub</li>
              <li>WordPress</li>
            </div>
          </ul>

          <h4>SOFTSKILLS</h4>
          <ul className="skills-container-list">
            <div className="skills-container-list-text">
              <li> Ability to work in a team</li>
              <li>Communication</li>
              <li>Decision making</li>
              <li> Stress management</li>
            </div>
          </ul>
          <h3>LANGUAGES</h3>
          <div className="page-right-languages">
            <p>
              English <br /> German(b1)
            </p>
            <p className="exp-date">
              Native <br />
              Intermediate
            </p>
          </div>
          <h3>EDUCATION</h3>
          <div className="education">
            <ul className="education-list">
              <div className="education-list-text">
                <li>Ibis Acam Wien</li>
                <li className="exp-date">2022</li>
                <li>B1 Intensiv Deutsch Sprachkurs</li>
              </div>
            </ul>
            <ul className="education-list">
              <div className="education-list-text">
                <li>St Davids CBS, Artane, Dublin, Ireland</li>
                <li className="exp-date">1999</li>
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
