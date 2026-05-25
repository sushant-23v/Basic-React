import { projectGoal } from '@/content/project-content';

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl">{projectGoal}</p>
        <p>
          Keep routes in <code>src/pages</code> and sync structure changes in{' '}
          <code>project-structure.json</code>.
        </p>
      </div>
    </footer>
  );
}
