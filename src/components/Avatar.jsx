import { useState } from 'react';

/**
 * Muestra la foto de una persona si existe una ruta válida en `src`.
 * Si no hay imagen, si el nombre es un placeholder (empieza con "[")
 * o si la imagen falla al cargar, muestra un círculo con la inicial
 * del nombre como respaldo automático.
 */
export default function Avatar({ src, name, size = 80, className = '' }) {
  const [failed, setFailed] = useState(false);
  const isPlaceholderName = !name || name.startsWith('[');
  const showImage = Boolean(src) && !isPlaceholderName && !failed;

  const style = { width: size, height: size };

  if (showImage) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        style={style}
        className={`rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      style={style}
      className={`flex items-center justify-center rounded-full bg-navy-950/5 text-navy-700 font-display dark:bg-mist-100/10 dark:text-mist-100 ${className}`}
    >
      {isPlaceholderName ? '?' : name.charAt(0)}
    </div>
  );
}
