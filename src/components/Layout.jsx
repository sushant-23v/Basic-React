import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useTheme } from '@/context/ThemeContext';

export function Layout() {
  const { resolvedTheme, themeStyles } = useTheme();

  return (
    <div
      data-theme={resolvedTheme}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-72 ${themeStyles.shellGlowClass}`}
      />
      <Header />
      <main className="relative z-10 flex-1 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
