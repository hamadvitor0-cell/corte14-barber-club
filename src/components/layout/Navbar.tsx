"use client";
import { useEffect, useState } from "react";
import {
  Armchair,
  Scissors,
  MapPin,
  Users,
  X,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { navigation } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";
import { useDialog } from "@/components/ui/useDialog";
import { useBooking } from "@/components/ui/BookingProvider";

const icons = {
  scissors: Scissors,
  armchair: Armchair,
  users: Users,
  pin: MapPin,
};
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const dialog = useDialog(open, () => setOpen(false));
  const book = useBooking();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  const item = (index: number) => {
    const link = navigation[index];
    const Icon = icons[link.icon];
    return (
      <a
        href={link.href}
        className={`nav-link ${active === link.href ? "is-active" : ""}`}
        aria-current={active === link.href ? "location" : undefined}
      >
        <Icon size={16} strokeWidth={1.3} aria-hidden="true" />
        <span>{link.label}</span>
      </a>
    );
  };
  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <div className="nav-side">
            {item(0)}
            {item(1)}
          </div>
          <a
            href="#inicio"
            className="brand-link"
            aria-label="Corte 14 — início"
          >
            <Logo />
          </a>
          <div className="nav-side">
            {item(2)}
            {item(3)}
          </div>
        </nav>
        <div className="mobile-nav">
          <a href="#inicio" aria-label="Corte 14 — início">
            <Logo />
          </a>
          <button
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span>Menu</span>
            <span className="menu-bars">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Menu principal"
      >
        <div className="menu-top">
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            aria-label="Corte 14 — início"
          >
            <Logo />
          </a>
          <button
            className="icon-button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X />
          </button>
        </div>
        <p className="eyebrow menu-caption">
          <Plus size={13} /> Encontre o seu estilo
        </p>
        <nav aria-label="Navegação mobile">
          {[
            ...navigation.slice(0, 3),
            { href: "#galeria", label: "Galeria" },
            navigation[3],
          ].map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <span className="menu-number">0{i + 1}</span>
              <span>{item.label}</span>
              <ArrowUpRight strokeWidth={1} />
            </a>
          ))}
        </nav>
        <button
          className="button button-fill"
          onClick={() => {
            setOpen(false);
            book();
          }}
        >
          Reservar horário <ArrowUpRight size={18} />
        </button>
        <div className="menu-bottom">
          <span>Curitiba — PR</span>
          <span>Projeto conceitual / 2026</span>
        </div>
      </dialog>
    </>
  );
}
