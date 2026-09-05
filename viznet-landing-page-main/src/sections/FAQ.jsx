import { faqs } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import FAQItem from '../components/FAQItem';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-navy-950/[0.03] dark:bg-mist-100/[0.03]">
      <div className="container-viznet">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas antes de empezar" />

        <div className="mt-10 max-w-3xl">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
