import { brand } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
export function Footer() {
  return (
    <footer className="footer section-pad">
      <div className="footer-top">
        <p className="eyebrow">Corte 14 / Barber Club</p>
        <nav aria-label="Navegação do rodapé">
          {[
            { href: "#inicio", label: "Início" },
            { href: "#servicos", label: "Serviços" },
            { href: "#casa", label: "A casa" },
            { href: "#equipe", label: "Equipe" },
            { href: "#galeria", label: "Galeria" },
            { href: "#contato", label: "Contato" },
          ].map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <span className="eyebrow">Est. 2026</span>
      </div>
      <a
        className="footer-wordmark"
        href="#inicio"
        aria-label="Corte 14 — voltar ao início"
      >
        <span>CORTE</span>
        <span className="lime">
          {brand.number}<small>↗</small>
        </span>
      </a>
      <div className="footer-bottom">
        <div>
          <span className="eyebrow">Projeto conceitual © 2026</span>
          <p>{brand.disclaimer}</p>
        </div>
        <a href={brand.developerUrl} target="_blank" rel="noopener noreferrer">
          Projeto demonstrativo desenvolvido por
          <br />
          <strong>
            VIHAM DEV <ArrowUpRight size={14} aria-hidden="true" />
          </strong>
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </footer>
  );
}
