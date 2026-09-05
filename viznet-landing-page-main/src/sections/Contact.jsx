import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { company, projectTypes, pricingPlans } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { buildQuoteMessage, openWhatsApp } from '../utils/whatsapp';
import { fadeUp } from '../utils/motionVariants';
import { usePrefersReducedMotion } from '../hooks/useReducedMotion';

const initialState = {
  name: '',
  business: '',
  projectType: '',
  plan: '',
  description: '',
  budget: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const reduced = usePrefersReducedMotion();

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Cuéntanos tu nombre.';
    if (!form.business.trim()) nextErrors.business = 'Indícanos el nombre de tu negocio.';
    if (!form.description.trim()) nextErrors.description = 'Describe brevemente tu proyecto.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    const message = buildQuoteMessage(form);
    openWhatsApp(message);
  };

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="container-viznet grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Cotización"
            title="Cuéntanos sobre tu negocio"
            description="Completa el formulario y te contactaremos por WhatsApp con una propuesta clara."
          />
          <div className="rounded-2xl border border-navy-950/10 bg-white dark:bg-teal-950/30 dark:border-mist-100/10 p-6">
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-1">También puedes escribirnos directamente:</p>
            <p className="font-display text-lg text-navy-950 dark:text-mist-100">{company.whatsappDisplay}</p>
          </div>
        </div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp(reduced)}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-navy-950/10 bg-white dark:bg-teal-950/30 dark:border-mist-100/10 p-6 sm:p-8 flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Nombre"
              id="name"
              value={form.name}
              onChange={handleChange('name')}
              error={errors.name}
              required
            />
            <Field
              label="Nombre del negocio"
              id="business"
              value={form.business}
              onChange={handleChange('business')}
              error={errors.business}
              required
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField
              label="Tipo de proyecto"
              id="projectType"
              value={form.projectType}
              onChange={handleChange('projectType')}
              options={projectTypes}
            />
            <SelectField
              label="Paquete de interés"
              id="plan"
              value={form.plan}
              onChange={handleChange('plan')}
              options={pricingPlans.map((plan) => plan.name)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-sm font-medium text-navy-950 dark:text-mist-100">
              Descripción del proyecto
            </label>
            <textarea
              id="description"
              rows={4}
              value={form.description}
              onChange={handleChange('description')}
              className="rounded-xl border border-navy-950/15 dark:border-mist-100/15 bg-transparent px-4 py-3 text-sm text-navy-950 dark:text-mist-100 placeholder:text-slate-500 focus:outline-none"
              placeholder="Ej. Necesito una página para mostrar mi menú y recibir pedidos por WhatsApp."
              aria-invalid={Boolean(errors.description)}
            />
            {errors.description && <span className="text-xs text-red-600">{errors.description}</span>}
          </div>

          <Field
            label="Presupuesto aproximado (opcional)"
            id="budget"
            value={form.budget}
            onChange={handleChange('budget')}
          />

          <Button type="submit" variant="primary" icon={Send} className="w-full sm:w-fit">
            Enviar por WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, id, value, onChange, error, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy-950 dark:text-mist-100">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        className="rounded-xl border border-navy-950/15 dark:border-mist-100/15 bg-transparent px-4 py-3 text-sm text-navy-950 dark:text-mist-100 placeholder:text-slate-500 focus:outline-none"
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}

function SelectField({ label, id, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-navy-950 dark:text-mist-100">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="rounded-xl border border-navy-950/15 dark:border-mist-100/15 bg-transparent px-4 py-3 text-sm text-navy-950 dark:text-mist-100 focus:outline-none"
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-navy-950">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
