import { useState } from 'react';
import { team } from '../data/siteData';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import TeamModal from '../components/TeamModal';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="equipo" className="py-20 sm:py-28 bg-navy-950/[0.03] dark:bg-mist-100/[0.03]">
      <div className="container-viznet">
        <SectionTitle
          eyebrow="Equipo"
          title="Las personas detrás de VizNet"
          description="Un equipo pequeño y enfocado en hacer bien cada proyecto que tomamos."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} onOpen={setSelectedMember} delay={index * 0.08} />
          ))}
        </div>
      </div>

      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
}
