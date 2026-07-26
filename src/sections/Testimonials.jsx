import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const timerRef = useRef(null);

  const goTo = useCallback(
    (newIndex, dir) => {
      setDirection(dir);
      setIndex((newIndex + testimonials.length) % testimonials.length);
    },
    []
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (paused || reduced) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setDirection(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, reduced]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <section id="testimonios" className="py-20 sm:py-28">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen quienes ya trabajaron con nosotros"
          align="center"
        />

        <div
          className="relative mt-14 max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                drag={reduced ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: reduced ? 0 : direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduced ? 0 : -direction * 40 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
              >
                <TestimonialCard testimonial={testimonials[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Testimonio anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 hover:bg-navy-950/5 dark:border-mist-100/20 dark:text-mist-100 dark:hover:bg-mist-100/10"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? 'w-6 bg-navy-950 dark:bg-mist-100'
                      : 'w-1.5 bg-navy-950/20 dark:bg-mist-100/20'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Siguiente testimonio"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 hover:bg-navy-950/5 dark:border-mist-100/20 dark:text-mist-100 dark:hover:bg-mist-100/10"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
