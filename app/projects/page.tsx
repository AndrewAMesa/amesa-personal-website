import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Selected projects</h1>
      </div>
      <ProjectExplorer />
    </section>
  );
}
