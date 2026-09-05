import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDark}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 transition-colors hover:bg-navy-950/5 dark:border-mist-100/20 dark:text-mist-100 dark:hover:bg-mist-100/10 ${className}`}
    >
      <Sun size={16} className={isDark ? 'hidden' : 'block'} strokeWidth={2} />
      <Moon size={16} className={isDark ? 'block' : 'hidden'} strokeWidth={2} />
    </button>
  );
}
