import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/siteData';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mist-100/80 dark:bg-navy-950/80 backdrop-blur-md shadow-sm shadow-navy-950/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-viznet flex h-28 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 font-display text-lg font-semibold text-navy-950 dark:text-mist-100">
          <Logo className="h-24 w-24" />
          VizNet
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy-950/80 hover:text-navy-950 dark:text-mist-100/80 dark:hover:text-mist-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button as="a" href="#contacto" variant="primary" className="text-sm">
            Solicitar cotización
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy-950 dark:text-mist-100"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-mist-100 dark:bg-navy-950 border-t border-navy-950/10 dark:border-mist-100/10"
          >
            <div className="container-viznet flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-3 text-sm text-navy-950 dark:text-mist-100 border-b border-navy-950/5 dark:border-mist-100/5 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contacto"
                onClick={handleLinkClick}
                variant="primary"
                className="mt-4 w-full"
              >
                Solicitar cotización
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
