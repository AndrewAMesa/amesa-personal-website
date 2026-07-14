"use client";

import { useMemo, useState } from "react";
import { ProjectMedia } from "@/components/ProjectMedia";
import { projects, type ProjectCategory } from "@/data/site";

const categories: Array<"All" | ProjectCategory> = ["All", "Applications", "AI & Data", "Research", "Creative", "Service"];

export function ProjectExplorer() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const visibleProjects = useMemo(
    () => activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <div className="filter-row" aria-label="Filter projects">
        {categories.map((category) => {
          const count = category === "All" ? projects.length : projects.filter((project) => project.category === category).length;
          return (
            <button
              className={activeCategory === category ? "filter-button active" : "filter-button"}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category}</span>
              <small>{count}</small>
            </button>
          );
        })}
      </div>

      <p className="collection-count" aria-live="polite">Showing {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}</p>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className="project-card with-media" key={project.title} style={{ animationDelay: `${index * 45}ms` }}>
            <ProjectMedia {...project} />
            <div className="project-card-body">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>
              <h2>{project.title}</h2>
              {project.associatedWith ? <p className="associated-label">{project.associatedWith}</p> : null}
              <p>{project.description}</p>
              {project.highlights?.length ? (
                <ul className="highlight-list compact">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              ) : null}
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              {project.links.length ? (
                <div className="card-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label}<span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </div>
              ) : <span className="no-link-label">No links available</span>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
