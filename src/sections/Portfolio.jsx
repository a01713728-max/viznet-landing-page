import { portfolio } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Proyectos"
          title="Trabajo que respalda lo que decimos"
          description="Una muestra de cómo transformamos negocios en experiencias digitales confiables."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:auto-rows-[1fr]">
          <ProjectCard project={portfolio[0]} delay={0} size="large" />
          <ProjectCard project={portfolio[1]} delay={0.08} />
          <ProjectCard project={portfolio[2]} delay={0.16} />
          <div className="hidden md:block" />
          <ProjectCard project={portfolio[3]} delay={0.24} />
        </div>
      </div>
    </section>
  );
}
