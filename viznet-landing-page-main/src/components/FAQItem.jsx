import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-navy-950/10 dark:border-mist-100/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base sm:text-lg text-navy-950 dark:text-mist-100">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 dark:border-mist-100/20 dark:text-mist-100"
        >
          <Plus size={15} />
        </motion.span>
      </button>
      <motion.div
        id={id}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
