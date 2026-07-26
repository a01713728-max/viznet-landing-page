import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { fadeUp } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';
import { openWhatsApp } from '../utils/whatsapp';

export default function PricingCard({ plan, delay = 0 }) {
  const reduced = usePrefersReducedMotion();
  const { highlighted } = plan;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp(reduced, delay)}
      className={`relative flex flex-col rounded-2xl p-7 sm:p-8 ${
        highlighted
          ? 'bg-navy-950 text-mist-100 md:-translate-y-3 shadow-xl shadow-navy-950/20 dark:bg-teal-950'
          : 'bg-white text-navy-950 border border-navy-950/10 dark:bg-teal-950/30 dark:text-mist-100 dark:border-mist-100/10'
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-7 rounded-full bg-mist-100 text-navy-950 text-xs font-medium px-3 py-1 dark:bg-mist-100 dark:text-navy-950">
          Recomendado
        </span>
      )}
      <p
        className={`text-xs uppercase tracking-[0.2em] mb-3 ${
          highlighted ? 'text-mist-100/60' : 'text-slate-500 dark:text-slate-300'
        }`}
      >
        {plan.narrative}
      </p>
      <h3 className="font-display text-2xl font-medium mb-4">{plan.name}</h3>
      <div className="mb-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-medium">${plan.price}</span>
        <span className={highlighted ? 'text-mist-100/60 text-sm' : 'text-slate-500 dark:text-slate-300 text-sm'}>
          {plan.currency} · {plan.priceNote}
        </span>
      </div>

      <ul className="mb-8 flex flex-col gap-3 grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${highlighted ? 'text-mist-100' : 'text-navy-900 dark:text-mist-100'}`}
            />
            <span className={highlighted ? 'text-mist-100/90' : 'text-slate-700 dark:text-slate-300'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? 'secondary' : 'primary'}
        onClick={() => openWhatsApp(plan.whatsappMessage)}
        className={highlighted ? '!border-mist-100/40 !text-mist-100 hover:!border-mist-100 w-full' : 'w-full'}
      >
        {plan.ctaLabel}
      </Button>
    </motion.div>
  );
}
