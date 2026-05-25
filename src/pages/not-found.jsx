import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="w-full rounded-[2rem] border border-line bg-surface p-8 text-center shadow-soft sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-text sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          Add a new file inside src/pages if this route should exist, or head
          back to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Return home
          </Link>
          <Link
            to="/docs"
            className="inline-flex rounded-full border border-line px-6 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
          >
            Open docs
          </Link>
        </div>
      </div>
    </div>
  );
}
