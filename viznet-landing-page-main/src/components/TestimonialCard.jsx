import { Quote } from 'lucide-react';
import Avatar from './Avatar';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-8 dark:bg-teal-950/40 dark:border-mist-100/10">
      <Quote size={28} className="text-navy-900/30 dark:text-mist-100/25 mb-4" strokeWidth={1.5} />
      <p className="text-base sm:text-lg text-navy-950 dark:text-mist-100 leading-relaxed mb-6 grow">
        “{testimonial.quote}”
      </p>
      <div className="flex items-center gap-3">
        <Avatar src={testimonial.photo} name={testimonial.name} size={40} className="text-sm" />
        <div>
          <p className="text-sm font-medium text-navy-950 dark:text-mist-100">{testimonial.name}</p>
          <p className="text-xs text-slate-500 dark:text-slate-300">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
