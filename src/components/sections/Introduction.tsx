import { brand } from "@/lib/content";
import {
  ArrowLink,
  Cross,
  Photo,
  SectionLabel,
} from "@/components/ui/Elements";
export function Introduction() {
  return (
    <section
      className="introduction light-section section-pad"
      id="essencia"
      aria-labelledby="essence-title"
    >
      <div className="intro-top">
        <SectionLabel>01 / A essência</SectionLabel>
        <span className="eyebrow">Corte 14 — Desde a ideia, original.</span>
      </div>
      <div className="intro-grid">
        <div className="intro-heading" data-reveal>
          <h2 id="essence-title">
            O VISUAL MUDA.
            <br />
            <span className="muted-word">A ATITUDE FICA.</span>
          </h2>
          <Cross />
        </div>
        <div className="intro-copy" data-reveal>
          <p>{brand.intro}</p>
          <ArrowLink href="#casa">Entre. A casa é sua.</ArrowLink>
        </div>
      </div>
      <div className="intro-editorial">
        <div className="intro-quote" data-reveal>
          <span className="eyebrow">O nosso jeito de fazer</span>
          <p>
            Sem pressa.
            <br />
            Sem excessos.
            <br />
            <span>Com identidade.</span>
          </p>
          <span className="tiny-caption">
            Técnica nas mãos. Atitude no olhar.
          </span>
        </div>
        <figure className="intro-figure">
          <Photo
            name="essence.jpg"
            alt="Mãos de um barbeiro trabalhando em um corte de cabelo"
            parallax
          />
          <figcaption>
            <span>01 — O cuidado está no processo.</span>
            <span>© Fotografia ilustrativa</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
