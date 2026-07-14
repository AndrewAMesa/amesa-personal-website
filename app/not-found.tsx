import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The requested page does not exist.</p>
      <Link className="button primary" href="/">Return home</Link>
    </section>
  );
}
