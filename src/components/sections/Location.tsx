import { ArrowUpRight, MapPin } from "lucide-react";
import { brand, hours } from "@/lib/content";
import { ArrowLink, Cross, SectionLabel } from "@/components/ui/Elements";
import { BookButton } from "@/components/ui/BookingProvider";
export function Location() {
  return (
    <>
      <section
        className="booking-cta light-section section-pad"
        id="agendamento"
        aria-labelledby="booking-cta-title"
      >
        <div>
          <SectionLabel>Seu próximo capítulo</SectionLabel>
          <h2 id="booking-cta-title" data-reveal>
            NA CADEIRA,
            <br />
            <span className="muted-word">SEU ESTILO.</span>
          </h2>
        </div>
        <div className="booking-cta-copy" data-reveal>
          <Cross />
          <p>
            Um corte tem o poder de mudar o seu dia.
            <br />
            Que tal experimentar o próximo?
          </p>
          <BookButton className="button-dark button-fill">
            Simular agendamento
          </BookButton>
          <small>
            Experiência demonstrativa.
            <br />
            Nenhuma reserva real será realizada.
          </small>
        </div>
      </section>
      <section
        className="location section-pad"
        id="contato"
        aria-labelledby="location-title"
      >
        <div className="section-heading">
          <SectionLabel light>06 / Encontre a casa</SectionLabel>
          <span className="eyebrow dim">25°25′S &nbsp; 49°16′W / Curitiba</span>
        </div>
        <h2 id="location-title" data-reveal>
          SEU PRÓXIMO CORTE
          <br />
          COMEÇA <span className="lime">AQUI.</span>
        </h2>
        <div className="location-grid">
          <div className="location-city" data-reveal>
            <MapPin size={24} strokeWidth={1} />
            <p>
              CURITIBA<span>PARANÁ, BRASIL</span>
            </p>
            <small>Localização ilustrativa. Este espaço é um conceito.</small>
          </div>
          <div className="location-hours" data-reveal>
            <p className="eyebrow">O tempo por aqui</p>
            <dl>
              {hours.map(({ day, time }) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
            <small>Horários demonstrativos.</small>
          </div>
          <div className="location-studio" data-reveal>
            <span className="studio-icon" aria-hidden="true">
              V<span>↗</span>
            </span>
            <p>
              Gostou da experiência?
              <br />
              Imagine o seu negócio aqui.
            </p>
            <ArrowLink href={brand.developerUrl} external>
              Conhecer a Viham Dev
            </ArrowLink>
          </div>
        </div>
        <a href="#inicio" className="back-top">
          <span>De volta ao início</span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
