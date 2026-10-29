import { ArrowUpRight } from "lucide-react";
import { team } from "@/lib/content";
import { SectionLabel, Photo } from "@/components/ui/Elements";
import { BookButton } from "@/components/ui/BookingProvider";
export function Team() {
  return (
    <section
      className="team light-section section-pad"
      id="equipe"
      aria-labelledby="team-title"
    >
      <div className="section-heading">
        <SectionLabel>04 / Os profissionais</SectionLabel>
        <span className="eyebrow">Mãos diferentes. A mesma dedicação.</span>
      </div>
      <div className="team-heading">
        <h2 id="team-title" data-reveal>
          QUEM FAZ
          <br />
          ACONTECER<span className="lime-dark">.</span>
        </h2>
        <p data-reveal>
          Personalidades que se encontram.
          <br />
          Técnicas que se complementam.
          <br />
          Conheça a nossa equipe conceitual.
        </p>
      </div>
      <div className="team-grid">
        {team.map((person) => (
          <article
            className="team-member"
            key={person.id}
            data-reveal
            tabIndex={0}
          >
            <div className="member-photo">
              <Photo
                name={person.image}
                alt={`Retrato ilustrativo de ${person.name}, personagem fictício`}
                sizes="(max-width: 767px) 90vw, 30vw"
              />
              <span className="member-number">/{person.number}</span>
              <span className="member-tag">
                Precisão & personalidade <ArrowUpRight size={14} />
              </span>
            </div>
            <div className="member-name">
              <h3>{person.name}</h3>
              <ArrowUpRight size={21} aria-hidden="true" />
            </div>
            <p>{person.specialty}</p>
          </article>
        ))}
      </div>
      <div className="team-end">
        <p>
          Profissionais fictícios. Retratos usados apenas para ilustrar o
          conceito.
        </p>
        <BookButton className="button-dark">Encontre seu estilo</BookButton>
      </div>
    </section>
  );
}
