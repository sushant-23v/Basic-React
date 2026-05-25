import { Link } from 'react-router-dom';
import { sampleRouteHighlights } from '@/content/project-content';
import { useTheme } from '@/context/ThemeContext';

export const meta = {
  title: 'Sample route',
};

export default function SampleRoutePage() {
  const { theme, resolvedTheme, themeStyles } = useTheme();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <section
        className={`rounded-[2rem] border p-6 shadow-soft sm:p-8 ${themeStyles.panelClass}`}
      >
        <span
          className={`inline-flex rounded-full border px-4 py-1 text-sm font-semibold ${themeStyles.badgeClass}`}
        >
          Sample route
        </span>
        <h1 className="mt-5 text-3xl font-black tracking-tight text-text sm:text-4xl">
          Theme-managed styles now have a concrete example page.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          This page exists as a starter example only. It shows how a route can
          read the active theme and use shared theme style classes without
          manual router setup.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Back home
          </Link>
          <Link
            to="/docs/routing"
            className="inline-flex rounded-full border border-line px-5 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
          >
            Read routing docs
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          className={`rounded-[2rem] border p-6 shadow-soft sm:p-8 ${themeStyles.softPanelClass}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            What this sample proves
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {sampleRouteHighlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-surface px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`rounded-[2rem] border p-6 shadow-soft sm:p-8 ${themeStyles.panelClass}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Active theme
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-line bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Stored preference
              </p>
              <p className="mt-2 text-2xl font-bold capitalize text-text">{theme}</p>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Resolved mode
              </p>
              <p className="mt-2 text-2xl font-bold text-text">{themeStyles.label}</p>
            </div>
          </div>
          <div className="mt-5 rounded-3xl border border-dashed border-line bg-surface-strong p-5">
            <p className="text-sm leading-7 text-muted">
              The current resolved theme is{' '}
              <span className="font-semibold text-text">{resolvedTheme}</span>.
              Components can read shared theme classes from context instead of
              hardcoding separate light and dark variants everywhere.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${themeStyles.previewAccentClass}`}
              >
                Accent preview
              </span>
              <span
                className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${themeStyles.badgeClass}`}
              >
                Theme badge
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
