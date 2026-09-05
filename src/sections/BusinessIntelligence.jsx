import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { businessIntelligence as bi } from '../data/siteData';
import { fadeUp, staggerContainer } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

function SalesLine({ data, reduced }) {
  const width = 480;
  const height = 140;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((value - min) / (max - min || 1)) * (height - 20) - 10;
    return `${x},${y}`;
  });

  const path = `M${points.join(' L')}`;
  const areaPath = `${path} L${width},${height} L0,${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto text-mist-100">
      <defs>
        <linearGradient id="bi-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill="url(#bi-area)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduced ? 0.3 : 1.4, ease: 'easeOut' }}
      />
    </svg>
  );
}

export default function BusinessIntelligence() {
  const reduced = usePrefersReducedMotion();
  const maxTopProduct = Math.max(...bi.topProducts.map((p) => p.value));

  return (
    <section id="business-intelligence" className="py-20 sm:py-28">
      <div className="container-viznet grid gap-14 lg:grid-cols-[0.85fr_1.15fr] items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer(0.1)}
          className="flex flex-col gap-5"
        >
          <motion.span
            variants={fadeUp(reduced)}
            className="font-display text-xs font-medium tracking-[0.2em] uppercase text-navy-700 dark:text-slate-300"
          >
            {bi.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp(reduced)}
            className="font-display text-3xl sm:text-4xl font-medium leading-[1.12] text-navy-950 dark:text-mist-100 text-balance"
          >
            {bi.title}
          </motion.h2>
          <motion.p
            variants={fadeUp(reduced)}
            className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            {bi.description}
          </motion.p>
          <motion.p variants={fadeUp(reduced)} className="text-xs text-slate-500 dark:text-slate-300 italic">
            {bi.note}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl bg-navy-950 dark:bg-teal-950 p-5 sm:p-7 shadow-xl shadow-navy-950/20"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="text-mist-100 font-display text-sm">Panel de negocio · Vista mensual</p>
            <span className="flex items-center gap-1 text-xs text-emerald-400">
              <TrendingUp size={14} /> +12.4%
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {bi.kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl bg-mist-100/5 p-3.5">
                <p className="text-[11px] text-mist-100/50 mb-1">{kpi.label}</p>
                <p className="font-display text-lg text-mist-100">{kpi.value}</p>
                <p className="text-[11px] text-emerald-400">{kpi.delta}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-mist-100/5 p-4 mb-4">
            <p className="text-[11px] text-mist-100/50 mb-2">Ventas mensuales</p>
            <SalesLine data={bi.monthlySales} reduced={reduced} />
          </div>

          <div className="rounded-xl bg-mist-100/5 p-4">
            <p className="text-[11px] text-mist-100/50 mb-3">Productos más vendidos</p>
            <div className="flex flex-col gap-2.5">
              {bi.topProducts.map((product) => (
                <div key={product.name} className="flex items-center gap-3">
                  <span className="w-24 shrink-0 text-[11px] text-mist-100/70">{product.name}</span>
                  <div className="h-2 flex-1 rounded-full bg-mist-100/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(product.value / maxTopProduct) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-mist-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
