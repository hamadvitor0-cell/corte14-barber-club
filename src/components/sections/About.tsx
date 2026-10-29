import { SectionLabel, Photo, Cross } from "@/components/ui/Elements";
export function About() {
  return (
    <section className="about" id="casa" aria-labelledby="about-title">
      <div className="about-heading section-pad">
        <SectionLabel light>03 / O espaço</SectionLabel>
        <h2 id="about-title" data-reveal>
          UM LUGAR.
          <br />
          <span className="outline-word">MUITAS HISTÓRIAS.</span>
        </h2>
        <p data-reveal>
          O som é bom. O papo também.
          <br />
          Um espaço para desacelerar,
          <br />
          encontrar seu estilo e ser você.
        </p>
      </div>
      <div className="about-collage">
        <Photo
          name="interior-concept.jpg"
          alt="Barbearia imaginária criada com IA, com cadeiras e espelhos sem marcas"
          className="about-main"
          sizes="100vw"
          parallax
        />
        <div className="about-photo-label">
          <Cross />
          <span>
            Portas abertas.
            <br />
            Personalidade de sobra.
          </span>
        </div>
        <div className="about-inset">
          <Photo
            name="tools-concept.jpg"
            alt="Composição de ferramentas sem marcas, gerada por IA"
            sizes="(max-width: 767px) 40vw, 24vw"
          />
          <span className="tiny-caption">C14 / O ritual começa aqui.</span>
        </div>
        <div className="about-bottom-label">
          <span>Um espaço imaginado. Imagem gerada por IA.</span>
          <span>Curitiba — PR</span>
        </div>
      </div>
    </section>
  );
}
