const structure = `src/
  components/
    ErrorBoundary.jsx
    Footer.jsx
    Header.jsx
    Layout.jsx
    ThemeToggle.jsx
  context/
    ThemeContext.jsx
  pages/
    index.jsx
    not-found.jsx
  router/
    index.jsx
    route-builder.jsx
  services/
    http.js
  App.jsx
  index.css
  main.jsx`;

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:py-20">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <span className="inline-flex rounded-full border border-line bg-surface px-4 py-1 text-sm font-semibold text-accent">
            Simple generic React boilerplate
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-text sm:text-6xl">
            A small project structure that an LLM can recreate without extra
            sample layers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            The goal is to keep only the baseline pieces most React apps need:
            a shared layout, file-based routes, theme context, a service layer,
            and an error boundary.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-line bg-surface p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Routing
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Add files inside <code>src/pages</code> and the router will pick
                them up automatically.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Theme
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                Keep light, dark, and system mode in one Context so the pattern
                stays reusable.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Included structure
          </p>
          <pre className="mt-4 overflow-x-auto rounded-2xl bg-surface-strong p-5 text-sm leading-7 text-text">
            <code>{structure}</code>
          </pre>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Components
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Only shared shell pieces live in <code>src/components</code>.
            Feature-specific UI can be added later when the project needs it.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Services
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Keep network helpers in <code>src/services/http.js</code> so pages
            do not talk to APIs directly.
          </p>
        </div>
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Pages
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Start with <code>index.jsx</code> and <code>not-found.jsx</code>.
            Add more route files only when a real screen is needed.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Core rules
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <li>Keep the folder tree shallow and add new folders only when needed.</li>
            <li>Use Context only for truly shared state such as theme or session.</li>
            <li>Keep route files focused on layout and screen composition.</li>
            <li>Move fetch and axios setup into the shared service file.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Data fetching baseline
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            The boilerplate keeps both <code>fetch</code> and <code>axios</code>
            available in one place. Add domain-specific API files later, but keep
            the low-level client setup shared.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-2xl bg-surface-strong p-5 text-sm leading-7 text-text">
            <code>{`import { axiosClient, fetchJson } from '@/services/http';`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
