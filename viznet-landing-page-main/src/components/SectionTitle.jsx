import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const reduced = usePrefersReducedMotion();
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp(reduced)}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span className="font-display text-xs font-medium tracking-[0.2em] uppercase text-navy-700 dark:text-slate-300">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] text-navy-950 dark:text-mist-100 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}
