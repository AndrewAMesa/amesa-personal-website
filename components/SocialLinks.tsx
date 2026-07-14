import { socials } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "social-links compact" : "social-links"}>
      {socials.map((social) => (
        <a
          className="social-link"
          data-social={social.label.toLowerCase()}
          href={social.href}
          key={social.label}
          target="_blank"
          rel="noreferrer"
          aria-label={`${social.label}: ${social.handle}`}
          title={`${social.label}: ${social.handle}`}
        >
          <SocialIcon name={social.icon} />
          {!compact && <span>{social.label}</span>}
        </a>
      ))}
    </div>
  );
}
