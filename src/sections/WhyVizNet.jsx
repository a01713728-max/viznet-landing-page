import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { whyViznet } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, staggerContainer } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

export default function WhyVizNet() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="por-que-viznet" className="py-20 sm:py-28">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Nuestra propuesta"
          title={whyViznet.title}
          description={whyViznet.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {whyViznet.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp(reduced)}
              className="flex gap-4 rounded-2xl border border-navy-950/10 bg-white p-6 dark:bg-teal-950/30 dark:border-mist-100/10"
            >
              <CheckCircle2 size={22} className="shrink-0 text-navy-900 dark:text-mist-100 mt-0.5" strokeWidth={1.6} />
              <div>
                <h3 className="font-display text-base font-medium text-navy-950 dark:text-mist-100 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
