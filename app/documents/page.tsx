import { documents } from "@/data/site";

export const metadata = { title: "Documents" };

export default function DocumentsPage() {
  const availableDocuments = documents.filter((document) => document.href);

  return (
    <section className="page-section container">
      <div className="page-intro">
        <h1>Project documents and professional materials</h1>
      </div>

      <div className="document-grid">
        {availableDocuments.map((document) => (
          <a
            className="document-card"
            href={document.href}
            key={document.title}
            target={document.external ? "_blank" : undefined}
            rel={document.external ? "noreferrer" : undefined}
          >
            <div className="document-topline">
              <span>{document.type}</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h2>{document.title}</h2>
            <p>{document.description}</p>
            <strong>Open document</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
