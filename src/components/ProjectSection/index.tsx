import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'

import { Project } from './styles'

type myProps = {
  project: IProject
  handleOpenCarousel: Function
}

export default function ProjectSection ({ project, handleOpenCarousel }: myProps) {
  const { name, scope, description, links, images, techs } =
    project || {}
  return (
    <Project key={name}>
      <div className="projectContent">
        <main>
          <section>
            <h2>{name}</h2>
            <strong>{scope}</strong>
            <p>{description}</p>

            <ul className="links">
              <li>
                <a href={links.githubURL}>
                  <span>CODE</span>
                  <FaGithub size={45} color="#fff" />
                </a>
              </li>
              {links.website ? (
                <li>
                  <a href={links.website}>
                    <span>WEBSITE</span>
                    <FaGlobe size={45} color="#fff" />
                  </a>
                </li>
              ) : null}
            </ul>
          </section>
          <aside>
            <button type="button" onClick={() => handleOpenCarousel(images)}>
              <img src={images[0].src} alt="" />
              <div className="seeMore">
                <p>Click to see more images</p>
              </div>
            </button>
            <ul className="techs">
              {techs && techs.map((tech: string) => <li key={tech}>{tech}</li>)}
            </ul>
          </aside>
        </main>
      </div>
    </Project>
  )
}
