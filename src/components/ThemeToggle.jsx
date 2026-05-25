import { useTheme } from '@/context/ThemeContext';

const themes = ['light', 'dark', 'system'];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface p-1">
      {themes.map((themeName) => {
        const isActive = theme === themeName;

        return (
          <button
            key={themeName}
            type="button"
            onClick={() => setTheme(themeName)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-2 text-xs font-semibold capitalize transition sm:px-3 sm:py-1.5 ${
              isActive
                ? 'bg-accent text-white'
                : 'text-muted hover:bg-surface-strong hover:text-text'
            }`}
          >
            {themeName}
          </button>
        );
      })}
    </div>
  );
}
