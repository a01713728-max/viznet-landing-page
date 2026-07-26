import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

const DEFAULT_MESSAGE = 'Hola, VizNet. Me gustaría solicitar información sobre sus servicios.';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const reduced = usePrefersReducedMotion();

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3">
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="hidden sm:block rounded-full bg-navy-950 text-mist-100 text-xs font-medium px-3 py-2 shadow-lg dark:bg-mist-100 dark:text-navy-950"
        >
          Cotiza por WhatsApp
        </motion.span>
      )}
      <motion.button
        type="button"
        onClick={() => openWhatsApp(DEFAULT_MESSAGE)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Abrir conversación de WhatsApp con VizNet"
        animate={reduced ? {} : { y: [0, -4, 0] }}
        transition={reduced ? {} : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        whileTap={{ scale: 0.92 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-navy-950/20 hover:brightness-105 transition-[filter]"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </motion.button>
    </div>
  );
}
