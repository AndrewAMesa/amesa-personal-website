import { MediaCarousel } from "@/components/MediaCarousel";
import { organizations, recognition, volunteering } from "@/data/site";

export const metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Organizations, volunteering, and awards</h1>
      </div>

      <div className="content-section first-section">
        <h2 className="content-section-title">Organizations</h2>
        <div className="organization-grid">
          {organizations.map((organization) => (
            <article className="organization-card" key={organization.name}>
              <div className="organization-heading">
                <div>
                  <span>{organization.period}</span>
                  <h2>{organization.name}</h2>
                </div>
                <a href={organization.href} target="_blank" rel="noreferrer" aria-label={`Visit ${organization.name}`}>↗</a>
              </div>
              <ul className="role-list">
                {organization.roles.map((role) => <li key={role}>{role}</li>)}
              </ul>
              <p>{organization.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-section-title">Volunteering</h2>
        <div className="volunteer-list">
          {volunteering.map((item, index) => (
            <article className="volunteer-card" key={`${item.organization}-${item.role}`}>
              <span className="volunteer-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="project-meta"><span>{item.period}</span><span>{item.cause}</span></div>
                <h2>{item.role}</h2>
                <a href={item.href} target="_blank" rel="noreferrer">{item.organization} ↗</a>
                <ul className="highlight-list">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h2 className="content-section-title">Honors & awards</h2>
        <div className="award-grid">
          {recognition.map((award) => {
            const mediaItems = award.images?.length
              ? award.images
              : award.image
                ? [{ src: award.image, alt: award.imageAlt || `${award.title} award photograph` }]
                : [];

            return (
              <article className={mediaItems.length ? "award-card with-media" : "award-card"} key={award.title}>
                {mediaItems.length ? (
                  <MediaCarousel
                    items={mediaItems}
                    label={award.title}
                    className="award-media"
                    sizes="(max-width: 820px) 100vw, 50vw"
                  />
                ) : null}
                <div className="award-card-body">
                  <div className="document-topline"><span>{award.date}</span><span>Recognition</span></div>
                  <h2>{award.title}</h2>
                  <strong>{award.issuer}</strong>
                  <p>{award.description}</p>
                  <a className="award-source-link" href={award.href} target="_blank" rel="noreferrer">
                    Award description <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
