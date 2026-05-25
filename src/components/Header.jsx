import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-base font-bold text-white">
            RB
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              React Boilerplate
            </p>
            <p className="text-sm text-muted">
              Small, generic, and LLM-friendly
            </p>
          </div>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}
