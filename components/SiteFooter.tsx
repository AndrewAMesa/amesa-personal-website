import Link from "next/link";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/">{site.name}</Link>
          <p>{site.role} in {site.location}</p>
        </div>
        <SocialLinks compact />
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>aamesa03@gmail.com</p>
      </div>
    </footer>
  );
}
