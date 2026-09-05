import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

export default function ProjectCard({ project, delay = 0, size = 'normal' }) {
  const reduced = usePrefersReducedMotion();
  const isLarge = size === 'large';
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(project.image) && !imageFailed;

  return (
    <motion.a
      href={project.url && project.url.startsWith('http') ? project.url : '#proyectos'}
      target={project.url && project.url.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp(reduced, delay)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white dark:bg-teal-950/40 dark:border-mist-100/10 ${
        isLarge ? 'md:row-span-2' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-navy-950/5 dark:bg-mist-100/5 ${
          isLarge ? 'aspect-4/5' : 'aspect-4/3'
        }`}
      >
        {hasImage ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-900/90 to-teal-950/90 text-mist-100/40 text-xs font-display tracking-widest uppercase">
            Imagen del proyecto
          </div>
        )}
        <div className="absolute inset-0 flex items-end p-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent">
          <span className="text-mist-100 text-sm">{project.description}</span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-300 mb-1">
            {project.category}
          </p>
          <h3 className="font-display text-lg font-medium text-navy-950 dark:text-mist-100">
            {project.name}
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{project.client}</p>
        </div>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:border-mist-100/20 dark:text-mist-100">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </motion.a>
  );
}
