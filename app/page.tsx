import Image from "next/image";
import Link from "next/link";

import { ProjectMedia } from "@/components/ProjectMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import {
  focusAreas,
  projects,
  recognition,
  site,
} from "@/data/site";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <>
      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>Software Engineer at Datadog</h1>

            <p className="hero-copy">{site.summary}</p>

            <div className="button-row">
              <Link
                className="button primary button-projects"
                href="/projects"
              >
                Projects
              </Link>

              <Link
                className="button secondary button-experience"
                href="/experience"
              >
                Experience
              </Link>

              <Link
                className="button secondary button-contact"
                href="/contact"
              >
                Contact
              </Link>
            </div>

            <SocialLinks />
          </div>

          <aside
            className="hero-profile-card"
            aria-label="Andrew Mesa portrait"
          >
            <div className="hero-photo-wrap">
              <Image
                src="/images/andrew-mesa-headshot.jpg"
                alt="Andrew Mesa"
                fill
                preload
                quality={95}
                sizes="(max-width: 620px) calc(100vw - 1.5rem), (max-width: 980px) 420px, 330px"
              />
            </div>

            <div className="hero-portrait-caption">
              <div className="portrait-heading">
                <strong>Andrew Mesa</strong>
                <span className="portrait-location">New York, NY</span>
              </div>

              <span className="portrait-role">
                Software Engineer at Datadog
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          title="What I work on"
          copy="Developer infrastructure, full-stack applications, accessible AI tools, embedded systems, and technical research."
        />

        <div className="focus-grid three-column">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          title="Selected work"
          copy="A selection of software, accessibility, data, and research projects."
          action={
            <Link className="text-link" href="/projects">
              All projects →
            </Link>
          }
        />

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article
              className="featured-project"
              key={project.title}
            >
              <ProjectMedia {...project} compact />

              <div className="project-card-body">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.period}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="card-links">
                  {project.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="recognition-panel">
          <div>
            <h2>Leadership and recognition</h2>

            <p>
              Selected involvement and recognition through HSF,
              SHPE, FIRST Robotics, Scouting, WPI, and other
              programs.
            </p>

            <Link className="text-link" href="/community">
              Community and awards →
            </Link>
          </div>

          <div className="recognition-list">
            {recognition.slice(0, 5).map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.title}
              >
                <span>{item.title}</span>

                <small>
                  {item.date} · {item.issuer}
                </small>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}