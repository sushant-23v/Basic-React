import { Link } from 'react-router-dom';
import { docsTopics, projectGoal, routingPatterns } from '@/content/project-content';

export const meta = {
  title: 'Docs overview',
};

export default function DocsIndexPage() {
  return (
    <div className="grid gap-6">
      <section className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Goal
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          {projectGoal}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {docsTopics.map((topic) => (
          <article
            key={topic.slug}
            className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              {topic.slug}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-text">{topic.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{topic.summary}</p>
            <Link
              to={`/docs/${topic.slug}`}
              className="mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
            >
              Read topic
            </Link>
          </article>
        ))}
      </section>

      <section className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Live route map
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-surface-strong text-text">
              <tr>
                <th className="px-4 py-3 font-semibold">File</th>
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
      </section>
    </div>
  );
}
