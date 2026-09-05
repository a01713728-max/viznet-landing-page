import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { hero } from '../data/siteData';
import Button from '../components/Button';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';
import { fadeUp, staggerContainer } from '../utils/motionVariants';

function NetworkVisual({ reduced }) {
  // Composición abstracta de "tarjetas de interfaz" conectadas por líneas,
  // referencia directa al nombre VizNet (Visual + Network).
  const nodes = [
    { cx: 120, cy: 90 },
    { cx: 300, cy: 60 },
    { cx: 300, cy: 220 },
    { cx: 460, cy: 140 },
    { cx: 180, cy: 260 },
  ];

  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ];

  return (
    <svg
      viewBox="0 0 560 340"
      className="w-full h-auto"
      role="img"
      aria-label="Composición abstracta de interfaces web conectadas"
    >
      <g stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
          />
        ))}
      </g>

      {/* Tarjetas tipo "ventana de interfaz" en cada nodo principal */}
      {[
        { x: 40, y: 30, w: 160, h: 100 },
        { x: 260, y: 130, w: 150, h: 100 },
        { x: 100, y: 200, w: 140, h: 90 },
      ].map((card, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x={card.x}
            y={card.y}
            width={card.w}
            height={card.h}
            rx="10"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.4"
          />
          <circle cx={card.x + 14} cy={card.y + 16} r="3" fill="currentColor" fillOpacity="0.45" />
          <line
            x1={card.x + 16}
            y1={card.y + 40}
            x2={card.x + card.w - 16}
            y2={card.y + 40}
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.2"
          />
          <line
            x1={card.x + 16}
            y1={card.y + 56}
            x2={card.x + card.w - 40}
            y2={card.y + 56}
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />
        </motion.g>
      ))}

      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r="4.5"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            reduced
              ? { opacity: 0.8, scale: 1 }
              : { opacity: [0.5, 1, 0.5], scale: 1 }
          }
          transition={
            reduced
              ? { duration: 0.4, delay: 0.6 + i * 0.1 }
              : { duration: 2.6, repeat: Infinity, delay: 0.6 + i * 0.3, ease: 'easeInOut' }
          }
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="container-viznet grid gap-14 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12)}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeUp(reduced)}
            className="font-display text-xs font-medium tracking-[0.25em] uppercase text-navy-700 dark:text-slate-300"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp(reduced)}
            className="font-display text-4xl sm:text-5xl md:text-[3.4rem] font-medium leading-[1.08] text-navy-950 dark:text-mist-100 text-balance"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp(reduced)}
            className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl text-balance"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div variants={fadeUp(reduced)} className="flex flex-wrap items-center gap-4 pt-2">
            <Button as="a" href="#contacto" variant="primary" icon={ArrowRight}>
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href="#proyectos" variant="secondary">
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-navy-900 dark:text-mist-100"
        >
          <NetworkVisual reduced={reduced} />
        </motion.div>
      </div>

      <motion.a
        href="#por-que-viznet"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/60 dark:border-mist-100/20 dark:text-mist-100/60"
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
