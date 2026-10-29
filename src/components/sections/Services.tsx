"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services, money } from "@/lib/content";
import { SectionLabel } from "@/components/ui/Elements";
import { useBooking } from "@/components/ui/BookingProvider";
export function Services() {
  const [active, setActive] = useState(0);
  const book = useBooking();
  return (
    <section
      className="services section-pad"
      id="servicos"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <SectionLabel light>02 / O que fazemos</SectionLabel>
        <span className="eyebrow dim">Técnica. Identidade. Você.</span>
      </div>
      <h2 id="services-title" className="services-title" data-reveal>
        PRECISÃO EM
        <br />
        CADA <span className="lime">DETALHE.</span>
      </h2>
      <div className="services-grid">
        <div className="service-visual" data-reveal>
          <div className="service-images">
            {services.map((service, i) => (
              <Image
                key={service.id}
                src={`/images/${service.image}`}
                alt={service.name + " — fotografia ilustrativa"}
                fill
                sizes="(max-width: 767px) 90vw, 30vw"
                className={active === i ? "is-active" : ""}
              />
            ))}
            <span className="photo-mark" aria-hidden="true">
              C14 /
            </span>
          </div>
          <div className="service-caption">
            <span>Feito à mão. Feito para você.</span>
            <span>0{active + 1} / 05</span>
          </div>
        </div>
        <div className="service-list">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-row ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <button
                className="service-select"
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                aria-controls={`service-detail-${service.id}`}
              >
                <span className="service-number">0{i + 1}</span>
                <span className="service-name">{service.name}</span>
                <span className="service-price">{money(service.price)}</span>
                <ArrowUpRight aria-hidden="true" size={21} />
              </button>
              <div
                className="service-detail"
                id={`service-detail-${service.id}`}
                hidden={active !== i}
              >
                <p>{service.description}</p>
                <div>
                  <span>
                    {service.duration} min <span aria-hidden="true">/</span>{" "}
                    Valor ilustrativo
                  </span>
                  <button
                    className="text-link"
                    onClick={() => book(service.id)}
                  >
                    Escolher serviço{" "}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p className="service-note">
            Seu estilo merece tempo. Todos os serviços e valores são
            demonstrativos.
          </p>
        </div>
      </div>
    </section>
  );
}
