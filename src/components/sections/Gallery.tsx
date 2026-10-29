"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { gallery } from "@/lib/content";
import { SectionLabel } from "@/components/ui/Elements";
import { useDialog } from "@/components/ui/useDialog";
export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useDialog(index !== null, () => setIndex(null));
  const startX = useRef(0);
  const change = (amount: number) =>
    setIndex((current) =>
      current === null
        ? null
        : (current + amount + gallery.length) % gallery.length,
    );
  return (
    <section
      className="gallery section-pad"
      id="galeria"
      aria-labelledby="gallery-title"
    >
      <div className="section-heading">
        <SectionLabel light>05 / Nosso trabalho</SectionLabel>
        <span className="eyebrow dim">Um olhar sobre o nosso universo.</span>
      </div>
      <div className="gallery-heading">
        <h2 id="gallery-title" data-reveal>
          DETALHES
          <br />
          QUE <span className="outline-word">FALAM.</span>
        </h2>
        <p data-reveal>
          Identidade se constrói nos detalhes.
          <br />
          Explore as referências visuais
          <br />
          que dão vida ao Corte 14.
        </p>
      </div>
      <div className="gallery-grid">
        {gallery.map((photo, i) => (
          <button
            key={photo.image}
            className={`gallery-item gallery-item-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Ver foto ${i + 1}: ${photo.title}`}
            data-photo-reveal
          >
            <Image
              src={`/images/${photo.image}`}
              alt={photo.alt}
              fill
              sizes={
                i === 0 || i === 5
                  ? "(max-width: 767px) 100vw, 60vw"
                  : "(max-width: 767px) 50vw, 35vw"
              }
            />
            <span className="gallery-item-top">{photo.category}</span>
            <span className="gallery-view">
              Ver foto <ArrowUpRight size={18} />
            </span>
            <span className="gallery-plus" aria-hidden="true">
              +
            </span>
          </button>
        ))}
      </div>
      <p className="gallery-note">
        Ensaio visual de referência. Fotografias ilustrativas, sem vínculo com
        uma barbearia real.
      </p>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            change(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            change(1);
          }
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndex(null);
        }}
      >
        {index !== null && (
          <>
            <div className="lightbox-top">
              <p className="eyebrow">Corte 14 / Arquivo visual</p>
              <button
                className="icon-button"
                onClick={() => setIndex(null)}
                aria-label="Fechar foto"
              >
                <X />
              </button>
            </div>
            <div
              className="lightbox-photo"
              onTouchStart={(e) => {
                startX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const delta = e.changedTouches[0].clientX - startX.current;
                if (Math.abs(delta) > 50) change(delta < 0 ? 1 : -1);
              }}
            >
              <Image
                key={index}
                src={`/images/${gallery[index].image}`}
                alt={gallery[index].alt}
                fill
                sizes="95vw"
                preload
              />
            </div>
            <div className="lightbox-bottom">
              <div aria-live="polite">
                <h3 id="lightbox-title">{gallery[index].title}</h3>
                <span>
                  Fotografia ilustrativa / {String(index + 1).padStart(2, "0")}{" "}
                  — {String(gallery.length).padStart(2, "0")}
                </span>
              </div>
              <div className="lightbox-arrows">
                <button
                  className="icon-button"
                  onClick={() => change(-1)}
                  aria-label="Foto anterior"
                >
                  <ArrowLeft />
                </button>
                <button
                  className="icon-button"
                  onClick={() => change(1)}
                  aria-label="Próxima foto"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
