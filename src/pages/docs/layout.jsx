import { NavLink, Outlet } from 'react-router-dom';
import { docsTopics } from '@/content/project-content';

function getNavLinkClass(isActive) {
  return `flex items-start justify-between gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
    isActive
      ? 'border-accent bg-accent/10 text-text'
      : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-text'
  }`;
}

export default function DocsLayout() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:gap-10 lg:py-14">
      <section className="rounded-[2rem] border border-line bg-surface/90 p-6 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          Boilerplate docs
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-text sm:text-4xl">
          Routing, responsiveness, and starter metadata live together now.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          These pages are intentionally small. They document the generic starter
          without adding feature demos or sample business modules.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <aside className="rounded-[2rem] border border-line bg-surface/90 p-5 shadow-soft sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Topics
          </p>
          <nav className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <NavLink to="/docs" end className={({ isActive }) => getNavLinkClass(isActive)}>
              <span className="font-semibold">Overview</span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Start
              </span>
            </NavLink>

            {docsTopics.map((topic) => (
              <NavLink
                key={topic.slug}
                to={`/docs/${topic.slug}`}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="font-semibold">{topic.title}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-accent">
                  Topic
                </span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
