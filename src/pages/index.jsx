import { Link } from 'react-router-dom';
import {
  buildRules,
  docsTopics,
  overviewCards,
  overviewStats,
  projectGoal,
  projectStructureSnippet,
  routingPatterns,
} from '@/content/project-content';
import { useTheme } from '@/context/ThemeContext';

export default function HomePage() {
  const { resolvedTheme, themeStyles } = useTheme();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:gap-16 lg:py-16">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-line bg-surface px-4 py-1 text-sm font-semibold text-accent">
            Reusable generic React starter
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-text sm:text-5xl lg:text-6xl">
            Build once, recreate anywhere, and keep the structure intentionally
            small.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {projectGoal}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/docs"
              className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Open docs
            </Link>
            <Link
              to="/sample"
              className="inline-flex rounded-full border border-line px-5 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              Open sample route
            </Link>
            <a
              href="#routing-map"
              className="inline-flex rounded-full border border-line px-5 py-3 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              View route patterns
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {overviewStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-line bg-surface p-5 shadow-soft"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-text">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Included structure
            </p>
            <pre className="mt-4 max-w-full overflow-x-auto rounded-2xl bg-surface-strong p-4 text-xs leading-6 text-text sm:p-5 sm:text-sm sm:leading-7">
              <code>{projectStructureSnippet}</code>
            </pre>
          </div>

          <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Theme-managed styling
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              The active mode is{' '}
              <span className="font-semibold capitalize text-text">
                {resolvedTheme}
              </span>
              . Shared theme classes are now centralized, so pages can reuse
              styled panels and badges instead of duplicating light and dark
              conditionals.
            </p>
            <div className={`mt-4 rounded-3xl border p-4 ${themeStyles.panelClass}`}>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${themeStyles.badgeClass}`}
                >
                  {themeStyles.label}
                </span>
                <Link
                  to="/sample"
                  className="text-sm font-semibold text-accent transition hover:text-accent-strong"
                >
                  See sample page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              {card.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </div>
        ))}
      </section>

      <section
        id="routing-map"
        className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Core rules
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            {buildRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Route patterns
            </p>
            <Link
              to="/docs/routing"
              className="text-sm font-semibold text-accent transition hover:text-accent-strong"
            >
              Read routing docs
            </Link>
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-surface-strong text-text">
                <tr>
                  <th className="px-4 py-3 font-semibold">File pattern</th>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">State</th>
                </tr>
              </thead>
              <tbody>
                {routingPatterns.map((pattern) => (
                  <tr key={pattern.file} className="border-t border-line text-muted">
                    <td className="px-4 py-3 font-mono text-xs sm:text-sm">
                      {pattern.file}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-text sm:text-sm">
                      {pattern.route}
                    </td>
                    <td className="px-4 py-3">{pattern.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Docs topics
          </p>
          <div className="mt-5 grid gap-4">
            {docsTopics.map((topic) => (
              <div
                key={topic.slug}
                className="rounded-3xl border border-line bg-surface-strong/60 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-bold text-text">{topic.title}</h2>
                  <Link
                    to={`/docs/${topic.slug}`}
                    className="text-sm font-semibold text-accent transition hover:text-accent-strong"
                  >
                    Open
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {topic.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Shared baseline
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Keep low-level data fetching shared, then let route files compose
            screens around it. This starter still keeps both <code>fetch</code>{' '}
            and <code>axios</code> available from one place.
          </p>
          <pre className="mt-4 max-w-full overflow-x-auto rounded-2xl bg-surface-strong p-4 text-xs leading-6 text-text sm:p-5 sm:text-sm sm:leading-7">
            <code>{`import { axiosClient, fetchJson } from '@/services/http';`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
