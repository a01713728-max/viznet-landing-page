import { motion } from 'framer-motion';

const VARIANTS = {
  primary:
    'bg-navy-900 text-mist-100 hover:bg-navy-800 dark:bg-mist-100 dark:text-navy-950 dark:hover:bg-white',
  secondary:
    'bg-transparent text-navy-950 border border-navy-950/20 hover:border-navy-950/60 dark:text-mist-100 dark:border-mist-100/25 dark:hover:border-mist-100/60',
  ghost: 'bg-navy-950/5 text-navy-950 hover:bg-navy-950/10 dark:bg-mist-100/10 dark:text-mist-100 dark:hover:bg-mist-100/15',
};

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  icon: Icon,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer select-none';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="inline-block"
    >
      <Component className={`${base} ${VARIANTS[variant]} ${className}`} {...props}>
        {children}
        {Icon && <Icon size={16} strokeWidth={2} />}
      </Component>
    </motion.div>
  );
}
