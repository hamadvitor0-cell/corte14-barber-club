import { Photo, Cross } from "@/components/ui/Elements";
export function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <span className="eyebrow manifesto-eyebrow">
        <Cross /> Corte 14 / Manifesto
      </span>
      <div className="manifesto-photo">
        <Photo
          name="gallery-classic.jpg"
          alt="Retrato editorial ilustrativo de um corte masculino"
          parallax
        />
      </div>
      <h2 id="manifesto-title">
        <span data-manifesto>ESTILO NÃO</span>
        <span data-manifesto>SE EXPLICA.</span>
        <span className="lime" data-manifesto>
          SE MOSTRA.
        </span>
      </h2>
      <p className="eyebrow manifesto-signature">
        Não é só um corte. É atitude.
      </p>
    </section>
  );
}
