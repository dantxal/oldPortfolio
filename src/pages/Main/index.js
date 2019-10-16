import React, { useState } from 'react';
import { animateScroll } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaGlobe,
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, About, Project, CarouselOverlay } from './styles';
import chevron from '~/assets/chevron.svg';
import meetappEdit from '~/assets/meetappEdit.png';
import meetappSignIn from '~/assets/meetappSignIn.png';
import meetappDashboardMobile from '~/assets/meetappDashboardMobile.png';
import meetappSignInMobile from '~/assets/meetappSignInMobile.png';
import grivReactRepo from '~/assets/griv/grivReactRepo.png';

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
      mainColor: '#d64a63',
      images: [
        meetappSignIn,
        meetappEdit,
        meetappDashboardMobile,
        meetappSignInMobile,
      ],
    },
    {
      name: 'GIT-ISSUES VIEWER',
      scope: 'FRONT-END',
      description: `
      This is a non-commercial app, built by dantxal during Rocketseat's Bootcamp 8.0.


It consumes github's api and allows you to keep track of your favorite git repositories with a simplified UI. Explore the repos you like and find some issues to solve, and feel great doing it.`,
      githubURL: 'https://github.com/dantxal/meetapp.git',
      website: 'https://griv.netlify.com/', // TODO
      mainColor: '#715c91',
      images: [grivReactRepo],
    },
  ];
  const [carouselImages, setCarouselImages] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  function openCarousel(images) {
    setCarouselImages(images);
    setShowCarousel(true);
  }

  return (
    <Container>
      <About>
        <div>
          <h1>DANIEL TEIXEIRA</h1>
          <h2>FULLSTACK DEVELOPER</h2>
          <strong>
            HTML5 | CSS | JS (ES6-8)
            <br />
            REACT | REACT-NATIVE | NODEJS
          </strong>
        </div>

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
            <aside>
              <button
                type="button"
                onClick={() => openCarousel(project.images)}
              >
                <img src={project.images[0]} alt="" />
                <div className="seeMore">
                  <p>Click to see more images</p>
                </div>
              </button>
            </aside>
          </main>
          <footer>
            <a href={project.githubURL}>
              <span>CODE</span>
              <FaGithub size={45} color="#fff" />
            </a>
            {project.website ? (
              <a href={project.website}>
                <span>WEBSITE</span>
                <FaGlobe size={45} color="#fff" />
              </a>
            ) : null}
          </footer>
        </Project>
      ))}
      {showCarousel && (
        <CarouselOverlay>
          <button type="button" onClick={() => setShowCarousel(false)}>
            X
          </button>
          <div className="carouselContainer">
            <Slider dots>
              {carouselImages &&
                carouselImages.map(image => (
                  <div
                    className="imageWrapper"
                    key={carouselImages.indexOf(image)}
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
            </Slider>
          </div>
        </CarouselOverlay>
      )}
    </Container>
  );
}
