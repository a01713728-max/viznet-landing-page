import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import Avatar from './Avatar';

export default function TeamModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="team-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-mist-100 p-6 sm:p-8 shadow-2xl dark:bg-teal-950"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-navy-950 hover:bg-navy-950/5 dark:text-mist-100 dark:hover:bg-mist-100/10"
            >
              <X size={18} />
            </button>

            <Avatar src={member.photo} name={member.name} size={64} className="mb-5 text-xl" />

            <h3 id="team-modal-title" className="font-display text-2xl font-medium text-navy-950 dark:text-mist-100">
              {member.name}
            </h3>
            <p className="text-navy-700 dark:text-slate-300 mb-5">{member.role}</p>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {member.shortDescription}
            </p>

            <div className="border-t border-navy-950/10 dark:border-mist-100/10 pt-5">
              <h4 className="font-display text-sm uppercase tracking-wide text-navy-700 dark:text-slate-300 mb-3">
                Currículum
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                {member.resume}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
