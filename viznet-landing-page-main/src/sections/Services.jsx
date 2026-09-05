import { motion } from 'framer-motion';
import { Palette, Code2, Server, Globe, Wrench } from 'lucide-react';
import { services } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, staggerContainer } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

const ICONS = {
  'diseno-web': Palette,
  'desarrollo-web': Code2,
  hosting: Server,
  dominio: Globe,
  mantenimiento: Wrench,
};

export default function Services() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="servicios" className="py-20 sm:py-28 bg-navy-950/[0.03] dark:bg-mist-100/[0.03]">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Servicios"
          title="Todo lo que tu negocio necesita para estar en línea"
          description="Un servicio completo, sin sorpresas: de la idea a una página funcionando, con soporte después de la entrega."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.08)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = ICONS[service.id] ?? Code2;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp(reduced)}
                className="flex flex-col gap-4 rounded-2xl border border-navy-950/10 bg-mist-100 dark:bg-navy-950 dark:border-mist-100/10 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-mist-100 dark:bg-mist-100 dark:text-navy-950">
                  <Icon size={19} strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-lg font-medium text-navy-950 dark:text-mist-100">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
