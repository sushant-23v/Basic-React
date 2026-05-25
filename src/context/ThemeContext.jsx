import { createContext, useContext, useEffect, useState } from 'react';
import { getAppTheme } from '@/theme/app-theme';

const ThemeContext = createContext(null);
const storageKey = 'basic-react-theme';

function getPreferredTheme(theme) {
  if (theme !== 'system') {
    return theme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'system';
    }

    return window.localStorage.getItem(storageKey) || 'system';
  });
  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const storedTheme = window.localStorage.getItem(storageKey) || 'system';

    return getPreferredTheme(storedTheme);
  });

  useEffect(() => {
    const root = document.documentElement;
    const nextResolvedTheme = getPreferredTheme(theme);

    root.classList.toggle('dark', nextResolvedTheme === 'dark');
    root.dataset.theme = nextResolvedTheme;
    window.localStorage.setItem(storageKey, theme);
    setResolvedTheme(nextResolvedTheme);

    if (theme !== 'system') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      const nextSystemTheme = mediaQuery.matches ? 'dark' : 'light';

      root.classList.toggle('dark', mediaQuery.matches);
      root.dataset.theme = nextSystemTheme;
      setResolvedTheme(nextSystemTheme);
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
    themeStyles: getAppTheme(resolvedTheme),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
