import { certifications, coursework, education, focusAreas, languages, site, skillGroups } from "@/data/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Software engineering background and technical skills.</h1>
      </div>

      <div className="about-layout">
        <article className="prose-block">
          <p className="large-copy">
            I am a Software Engineer at Datadog in New York City and a Worcester Polytechnic Institute alumnus, originally from Boise, Idaho.
          </p>
          <p>
            At WPI, I double-majored in Computer Science and Data Science and graduated with high distinction. My academic work combined technical coursework with applied, interdisciplinary projects in full-stack development, artificial intelligence, accessibility, research, and physical computing.
          </p>
          <p>
            My capstone team developed a multilingual application integrated with InnoSpire smart glasses to support visually impaired and blind users. The project combined online and offline language-model workflows, computer vision, mobile development, and user evaluation, and received WPI&apos;s Data Science Outstanding Major Qualifying Project Award.
          </p>
          <p>
            Professionally, I have worked at Datadog, LinkedIn, HP, STEM Forged, and Vellotti&apos;s Chess School. My experience ranges from developer infrastructure and full-stack product development to firmware, security automation, educational content, and instruction.
          </p>
          <p>
            Outside of work, I enjoy camping, cooking, and photography.
          </p>
        </article>

        <aside className="profile-facts">
          <div><span>Role</span><strong>{site.role}</strong></div>
          <div><span>Team</span><strong>{site.team}</strong></div>
          <div><span>Based in</span><strong>{site.location}</strong></div>
          <div><span>Education</span><strong>B.S. Computer Science & Data Science</strong></div>
          <div><span>Languages</span><strong>English, Spanish</strong></div>
        </aside>
      </div>

      <div className="content-section">
        <h2 className="content-section-title">Education</h2>
        <div className="education-grid three-column">
          {education.map((item) => (
            <article className="education-card detailed" key={`${item.school}-${item.degree}`}>
              <span>{item.period}</span>
              <h2>{item.degree}</h2>
              <a href={item.schoolUrl} target="_blank" rel="noreferrer">{item.school} ↗</a>
              <div className="education-details">
                <strong>{item.grade}</strong>
                {item.distinction ? <p>{item.distinction}</p> : null}
                <p>{item.activities.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section split-content-section">
        <div>
          <h2 className="content-section-title">Certification</h2>
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.title}>
              <span>{certification.issued}</span>
              <h2>{certification.title}</h2>
              <p>{certification.issuer}</p>
              <small>Credential ID: {certification.credentialId}</small>
            </article>
          ))}
        </div>
        <div>
          <h2 className="content-section-title">Languages</h2>
          <div className="language-list">
            {languages.map((item) => (
              <div key={item.language}>
                <strong>{item.language}</strong>
                <span>{item.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-section-title">Technical areas</h2>
        <div className="skills-list">
          {focusAreas.map((area) => (
            <article key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-section-title">Skills</h2>
        <div className="skill-group-grid">
          {skillGroups.map((group) => (
            <article className="skill-group-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-section-title">Selected coursework</h2>
        <div className="course-grid">
          {coursework.map((course, index) => (
            <article className="course-card" key={`${course.code}-${course.title}-${index}`}>
              <span>{course.code}</span>
              <strong>{course.title}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
