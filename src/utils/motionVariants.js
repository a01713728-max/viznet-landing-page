/**
 * Variants de Framer Motion reutilizables en toda la aplicación.
 * Cuando `reduced` es true, se eliminan los desplazamientos y se
 * conserva únicamente un fade muy corto.
 */
export function fadeUp(reduced, delay = 0) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.2, delay } },
    };
  }
  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
}

export function staggerContainer(stagger = 0.12, delayChildren = 0) {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function scaleIn(reduced, delay = 0) {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.2, delay } },
    };
  }
  return {
    hidden: { opacity: 0, scale: 0.94 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
}
