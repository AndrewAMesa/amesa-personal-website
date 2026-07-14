import { SocialIcon } from "@/components/SocialIcon";
import { site, socials, type SocialIconName } from "@/data/site";

export const metadata = { title: "Contact" };

type ContactMethod = {
  label: string;
  handle: string;
  href: string;
  icon: SocialIconName;
};

export default function ContactPage() {
  const contactMethods: ContactMethod[] = [
    ...socials,
    {
      label: "Email",
      handle: site.email,
      href: `mailto:${site.email}`,
      icon: "email",
    },
    ...(site.calendly
      ? [
          {
            label: "Calendly",
            handle: "Schedule a meeting",
            href: site.calendly,
            icon: "calendar" as const,
          },
        ]
      : []),
  ];

  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Contact and professional profiles</h1>
      </div>

      <div className="social-card-grid">
        {contactMethods.map((method) => (
          <a
            className="social-card"
            data-contact={method.label.toLowerCase()}
            href={method.href}
            target={method.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={method.href.startsWith("mailto:") ? undefined : "noreferrer"}
            key={method.label}
          >
            <span className="social-card-icon">
              <SocialIcon name={method.icon} />
            </span>
            <div>
              <span>{method.label}</span>
              <strong>{method.handle}</strong>
            </div>
            <span className="social-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
