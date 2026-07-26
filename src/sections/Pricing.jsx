import { pricingPlans } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import PricingCard from '../components/PricingCard';

export default function Pricing() {
  return (
    <section id="precios" className="py-20 sm:py-28">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Planes"
          title="Un paquete para cada etapa de tu negocio"
          description="Empieza con presencia digital, crece con tu inventario conectado y avanza hacia decisiones basadas en datos."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:items-start">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
