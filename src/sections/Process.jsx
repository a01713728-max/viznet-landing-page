import { motion } from 'framer-motion';
import { process } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import { fadeUp } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

export default function Process() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="proceso" className="py-20 sm:py-28 bg-navy-950/[0.03] dark:bg-mist-100/[0.03]">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de principio a fin"
          description="Cinco etapas que garantizan que sepas exactamente en qué punto está tu proyecto."
        />

        <div className="relative mt-16">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-navy-950/10 dark:bg-mist-100/10" />
          <div className="grid gap-8 md:grid-cols-5">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp(reduced, index * 0.12)}
                className="relative flex flex-col gap-3"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-mist-100 dark:bg-mist-100 dark:text-navy-950 font-display text-sm">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-medium text-navy-950 dark:text-mist-100">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
