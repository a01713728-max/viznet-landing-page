import { useState } from 'react';
import { company } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

/**
 * Muestra el logo real de VizNet, eligiendo automáticamente la
 * versión correcta según el tema activo:
 * - `company.logoLight` se usa en modo claro (debe ser un logo
 *   oscuro o de color, visible sobre fondo claro).
 * - `company.logoDark` se usa en modo oscuro (debe ser un logo
 *   claro o blanco, visible sobre fondo oscuro).
 *
 * Si la imagen correspondiente no existe o falla al cargar,
 * muestra el wordmark de respaldo ("V" en un cuadro).
 */
export default function Logo({ className = 'h-8 w-8' }) {
  const { theme } = useTheme();
  const [failed, setFailed] = useState(false);

  const src = theme === 'dark' ? company.logoDark : company.logoLight;
  const showImage = Boolean(src) && !failed;

  if (showImage) {
    return (
      <img
        src={src}
        alt={`Logo de ${company.name}`}
        onError={() => setFailed(true)}
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <span
      className={`flex items-center justify-center rounded-lg bg-navy-950 text-mist-100 dark:bg-mist-100 dark:text-navy-950 font-display text-sm ${className}`}
    >
      V
    </span>
  );
}