import { PhotographyGallery } from "@/components/PhotographyGallery";

export const metadata = { title: "Photography" };

export default function PhotographyPage() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Photography portfolio</h1>
      </div>
      <PhotographyGallery />
    </section>
  );
}
