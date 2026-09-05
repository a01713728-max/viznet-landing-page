import { company, footer, navLinks, services, socialLinks } from '../data/siteData';
import Button from '../components/Button';
import Logo from '../components/Logo';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.28.22-.5.5-.5H14V9z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5v3.5" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

function SocialLinks() {
  const activeSocials = Object.entries(socialLinks).filter(([, url]) => Boolean(url));

  if (activeSocials.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mt-1">
      {activeSocials.map(([platform, url]) => {
        const Icon = SOCIAL_ICONS[platform];
        if (!Icon) return null;
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visita nuestro ${platform}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 hover:bg-navy-950/5 dark:border-mist-100/20 dark:text-mist-100 dark:hover:bg-mist-100/10 transition-colors"
          >
            <Icon width={16} height={16} />
          </a>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-navy-950/10 dark:border-mist-100/10 bg-mist-100 dark:bg-navy-950">
      <div className="container-viznet py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex items-center gap-3 font-display text-lg font-semibold text-navy-950 dark:text-mist-100">
            <Logo className="h-24 w-24" />
            {company.name}
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 max-w-sm leading-relaxed">
            {footer.description}
          </p>
          <Button as="a" href="#contacto" variant="primary" className="w-fit mt-2">
            Solicitar cotización
          </Button>
          <SocialLinks />
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wide text-navy-700 dark:text-slate-300 mb-4">
            Navegación
          </h4>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-700 dark:text-slate-300 hover:text-navy-950 dark:hover:text-mist-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-wide text-navy-700 dark:text-slate-300 mb-4">
            Servicios
          </h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((service) => (
              <li key={service.id} className="text-sm text-slate-700 dark:text-slate-300">
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-viznet py-6 border-t border-navy-950/10 dark:border-mist-100/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500 dark:text-slate-300">{footer.copyright}</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">
          WhatsApp: {company.whatsappDisplay} · {company.location}
        </p>
      </div>
    </footer>
  );
}
