const appThemes = {
  light: {
    label: 'Light mode',
    shellGlowClass:
      'bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_36%)]',
    badgeClass: 'border-blue-200 bg-white/90 text-slate-900',
    panelClass: 'border-blue-200/80 bg-white/92',
    softPanelClass: 'border-blue-100 bg-blue-50/80',
    previewAccentClass: 'bg-blue-600 text-white',
  },
  dark: {
    label: 'Dark mode',
    shellGlowClass:
      'bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.14),transparent_38%)]',
    badgeClass: 'border-cyan-400/30 bg-slate-900/90 text-slate-100',
    panelClass: 'border-slate-700 bg-slate-900/92',
    softPanelClass: 'border-slate-700 bg-slate-800/80',
    previewAccentClass: 'bg-cyan-400 text-slate-950',
  },
};

export function getAppTheme(resolvedTheme = 'light') {
  return appThemes[resolvedTheme] ?? appThemes.light;
}
