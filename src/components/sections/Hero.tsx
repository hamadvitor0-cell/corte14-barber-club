import Image from "next/image";
import { ArrowDown, Plus } from "lucide-react";
import { BookButton } from "@/components/ui/BookingProvider";
export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-photo">
        <Image
          src="/images/hero-concept.jpg"
          fill
          preload
          sizes="100vw"
          alt="Cena de um corte em uma barbearia fictícia, gerada por IA para este projeto"
          className="hero-image"
        />
        <div className="hero-shade" />
      </div>
      <div className="hero-rail">
        <span>Independente por natureza.</span>
        <span>
          Curitiba, Brasil <Plus size={12} aria-hidden="true" />
        </span>
      </div>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="small-line" /> Estilo não se improvisa.
        </p>
        <h1 id="hero-title">
          <span className="hero-line">
            <span>NÃO É SÓ</span>
          </span>
          <span className="hero-line">
            <span>
              UM CORTE<span className="lime">.</span>
            </span>
          </span>
        </h1>
        <div className="hero-copy">
          <p>
            Precisão no corte.
            <br />
            Personalidade em cada detalhe.
          </p>
          <BookButton />
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#essencia" className="scroll-indicator">
          <span className="scroll-line">
            <ArrowDown size={15} />
          </span>
          <span>Role para explorar</span>
        </a>
        <span className="hero-index">
          <span className="lime">01</span> / 06
        </span>
        <p className="hero-location">
          Barber Club <span>Curitiba — PR</span>
          <small>Projeto conceitual</small>
        </p>
      </div>
      <span className="hero-corner" aria-hidden="true">
        +
      </span>
    </section>
  );
}
