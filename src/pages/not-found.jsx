import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-4xl px-6 py-20">
      <div className="w-full rounded-3xl border border-line bg-surface p-10 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold text-text">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Add a new file inside src/pages if this route should exist, or head
          back to the homepage.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
