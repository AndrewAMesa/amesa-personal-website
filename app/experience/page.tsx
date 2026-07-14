import { experiences } from "@/data/site";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Professional experience</h1>
      </div>

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <article className="experience-item" key={`${item.organization}-${item.role}-${item.period}`}>
            <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="experience-period">
              <strong>{item.period}</strong>
              <span>{item.location}</span>
              {item.workMode ? <span>{item.workMode}</span> : null}
            </div>
            <div className="experience-copy">
              <h2>{item.role}</h2>
              <a href={item.organizationUrl} target="_blank" rel="noreferrer">{item.organization} ↗</a>
              {item.team ? <p className="team-label">{item.team}</p> : null}
              <ul className="highlight-list">
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <ul className="tag-list" aria-label={`${item.organization} skills`}>
                {item.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
