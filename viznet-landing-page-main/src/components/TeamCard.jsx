import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';
import Avatar from './Avatar';

export default function TeamCard({ member, onOpen, delay = 0 }) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(member)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp(reduced, delay)}
      className="group flex flex-col items-start text-left rounded-2xl border border-navy-950/10 bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-navy-950/5 dark:bg-teal-950/40 dark:border-mist-100/10 dark:hover:shadow-black/20"
    >
      <Avatar src={member.photo} name={member.name} size={80} className="mb-4 text-xl" />
      <h3 className="font-display text-lg font-medium text-navy-950 dark:text-mist-100">
        {member.name}
      </h3>
      <p className="text-sm text-navy-700 dark:text-slate-300 mb-2">{member.role}</p>
      <p className="text-sm text-slate-700 dark:text-slate-300">{member.shortDescription}</p>
      <span className="mt-4 text-xs font-medium tracking-wide uppercase text-navy-950/60 group-hover:text-navy-950 dark:text-mist-100/60 dark:group-hover:text-mist-100 transition-colors">
        Ver currículum →
      </span>
    </motion.button>
  );
}
