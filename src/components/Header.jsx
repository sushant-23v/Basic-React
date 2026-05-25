import { Link, NavLink } from 'react-router-dom';
import { navigationLinks } from '@/content/project-content';
import { ThemeToggle } from '@/components/ThemeToggle';

function getNavLinkClass(isActive) {
  return `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-accent text-white'
      : 'bg-surface text-muted hover:bg-surface-strong hover:text-text'
  }`;
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start justify-between gap-4 sm:items-center">
          <Link to="/" className="inline-flex min-w-0 items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-base font-bold text-white">
              RB
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                React Boilerplate
              </p>
              <p className="truncate text-sm text-muted">
                Generic, small, and ready to recreate
              </p>
            </div>
          </Link>

          <div className="sm:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:justify-end">
          <nav className="flex flex-wrap items-center gap-2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
