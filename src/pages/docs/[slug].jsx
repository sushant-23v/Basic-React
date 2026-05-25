import { Link, useParams } from 'react-router-dom';
import { docsTopics } from '@/content/project-content';

export default function DocsTopicPage() {
  const { slug } = useParams();
  const topic = docsTopics.find((entry) => entry.slug === slug);

  if (!topic) {
    return (
      <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-warning">
          Missing topic
        </p>
        <h1 className="mt-3 text-3xl font-bold text-text">This docs page does not exist.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Try another slug from the docs overview, or add a matching object to
          the shared dummy data file.
        </p>
        <Link
          to="/docs"
          className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
        >
          Back to docs
        </Link>
      </div>
    );
  }

  return (
    <article className="rounded-[2rem] border border-line bg-surface p-6 shadow-soft sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        {topic.slug}
      </p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-text sm:text-4xl">
        {topic.title}
      </h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
        {topic.summary}
      </p>

      <div className="mt-8 grid gap-5">
        {topic.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-line bg-surface-strong/65 p-5 sm:p-6"
          >
            <h2 className="text-xl font-bold text-text">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              {section.body}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-surface px-4 py-3">
                  {bullet}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
