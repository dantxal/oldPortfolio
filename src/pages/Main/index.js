import React from 'react';
import { animateScroll } from 'react-scroll';

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaGlobe,
} from 'react-icons/fa';
import { Container, About, Project } from './styles';
import chevron from '~/assets/chevron.svg';
import meetappEdit from '~/assets/meetappEdit.png';
import meetappSignIn from '~/assets/meetappSignIn.png';
import meetappDashboardMobile from '~/assets/meetappDashboardMobile.png';
import meetappSignInMobile from '~/assets/meetappSignInMobile.png';

export default function Main() {
  const projects = [
    {
      name: 'MEETAPP',
      scope: `BACK-END,
      FRONT-END,
      MOBILE`,
      description: `
      App for scheduling meetups with authentication, date and time selectors, responsive design, auto-mailing system notifications.

      The back-end is built in Nodejs with a Postgres and a Redis databases. It has a mailing system that uses Redis and BeeQueue for a super-fast and scalable api.

      The front-end is built with Reactjs and uses @Rocketseat/unform forform validation and styled components styling.

      The mobile app is built with React Native with styled components styling aswell, it uses different navigation types and accessbility on forms.`,
      githubURL: 'https://github.com/dantxal/meetapp.git',
      website: '', // TODO
      images: {
        web1: meetappSignIn,
        web2: meetappEdit,
        mobile1: meetappDashboardMobile,
        mobile2: meetappSignInMobile,
      },
    },
    {
      name: 'GIT-ISSUES-VIEWER',
      scope: 'FRONT-END',
      description: `
      App for scheduling meetups with authentication, date and time selectors, responsive design, auto-mailing system notifications.

      The back-end is built in Nodejs with a Postgres and a Redis databases. It has a mailing system that uses Redis and BeeQueue for a super-fast and scalable api.

      The front-end is built with Reactjs and uses @Rocketseat/unform forform validation and styled components styling.

      The mobile app is built with React Native with styled components styling aswell, it uses different navigation types and accessbility on forms.`,
      githubURL: 'https://github.com/dantxal/meetapp.git',
      website: '', // TODO
      images: {
        web1: meetappSignIn,
        web2: meetappEdit,
        mobile1: meetappDashboardMobile,
        mobile2: meetappSignInMobile,
      },
    },
  ];
  return (
    <Container>
      <About>
        <div>
          <h1>DANIEL TEIXEIRA</h1>
          <h2>FULLSTACK DEVELOPER</h2>
        </div>

        <strong>
          HTML5 | CSS | JS (ES6-8)
          <br />
          REACT | REACT-NATIVE | NODEJS
        </strong>

        <nav>
          <button type="button">
            <span>github.com/dantxal</span>
            <FaGithub size={24} color="#2169FF" />
          </button>
          <button type="button">
            <span>daniel-teixeira-faria</span>
            <FaLinkedin size={24} color="#2169FF" />
          </button>
          <button type="button">
            <span>dantxal@gmail.com</span>
            <FaEnvelope size={24} color="#2169FF" />
          </button>
          <button type="button">
            <span>Curriculum Vitae</span>
            <FaFilePdf size={24} color="#2169FF" />
          </button>
        </nav>

        <button
          type="button"
          onClick={() => animateScroll.scrollTo(window.innerHeight)}
        >
          PORTFOLIO
          <img src={chevron} alt="Chevron pointing down" />
        </button>
      </About>

      {projects.map(project => (
        <Project mainColor={project.mainColor} key={project.name}>
          <main>
            <section>
              <h2>{project.name}</h2>
              <strong>{project.scope}</strong>
              <p>{project.description}</p>
            </section>
            <button type="button">
              <img src={projects[0].images.web1} alt="Web1" />
              <img src={projects[0].images.web2} alt="Web2" />
            </button>
          </main>
          <footer>
            <button type="button">
              <span>CODE</span>
              <FaGithub size={45} color="#fff" />
            </button>
            {project.website ? (
              <button type="button">
                <span>WEBSITE</span>
                <FaGlobe size={45} color="#fff" />
              </button>
            ) : null}
          </footer>
        </Project>
      ))}
    </Container>
  );
}
