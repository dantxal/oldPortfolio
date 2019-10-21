/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { animateScroll } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaGlobe,
  FaTimes,
} from 'react-icons/fa';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, About, Project, CarouselOverlay } from './styles';
import chevron from '~/assets/chevron.svg';

import projects from '~/data/projects';

export default function Main() {
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
          <a href="https://github.com/dantxal">
            <span>github.com/dantxal</span>
            <FaGithub size={30} color="#2169FF" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-teixeira-faria/">
            <span>daniel-teixeira-faria</span>
            <FaLinkedin size={30} color="#2169FF" />
          </a>
          <a style={{ cursor: 'text' }}>
            <span>dantxal@gmail.com</span>
            <FaEnvelope size={30} color="#2169FF" />
          </a>
          <a href="/DanielFaria-resume.pdf">
            <span>CV/Resume</span>
            <FaFilePdf size={30} color="#2169FF" />
          </a>
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
          <div className="projectContent">
            <main>
              <section>
                <h2>{project.name}</h2>
                <strong>{project.scope}</strong>
                <p>{project.description}</p>

                <ul className="links">
                  <li>
                    <a href={project.links.githubURL}>
                      <span>CODE</span>
                      <FaGithub size={45} color="#fff" />
                    </a>
                  </li>
                  {project.links.website ? (
                    <li>
                      <a href={project.links.website}>
                        <span>WEBSITE</span>
                        <FaGlobe size={45} color="#fff" />
                      </a>
                    </li>
                  ) : null}
                </ul>
              </section>
              <aside>
                <button
                  type="button"
                  onClick={() => openCarousel(project.images)}
                >
                  <img src={project.images[0].src} alt="" />
                  <div className="seeMore">
                    <p>Click to see more images</p>
                  </div>
                </button>
                <ul className="techs">
                  {project.techs &&
                    project.techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </aside>
            </main>
          </div>
        </Project>
      ))}
      {showCarousel && (
        <CarouselOverlay>
          <button type="button" onClick={() => setShowCarousel(false)}>
            <FaTimes size={45} color="#ddd" />
          </button>
          <div className="carouselContainer">
            <Slider dots>
              {carouselImages &&
                carouselImages.map((image, index) => (
                  <div className="imageWrapper" key={String(index)}>
                    <img src={image.src} alt="" />
                    <p className="caption">{image.caption}</p>
                  </div>
                ))}
            </Slider>
          </div>
        </CarouselOverlay>
      )}
    </Container>
  );
}
