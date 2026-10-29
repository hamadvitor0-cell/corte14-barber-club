import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`section-label ${light ? "label-light" : ""}`}>
      <span className="label-dot" />
      {children}
    </p>
  );
}
export function Photo({
  name,
  alt,
  className = "",
  sizes = "(max-width: 767px) 100vw, 50vw",
  priority = false,
  parallax = false,
}: {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
}) {
  return (
    <div className={`photo ${className}`} data-photo-reveal>
      <Image
        src={`/images/${name}`}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        className="photo-image"
        data-parallax={parallax ? "true" : undefined}
      />
    </div>
  );
}
export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      className={`text-link ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only">{external ? " (abre em nova aba)" : ""}</span>
    </a>
  );
}
export function Cross({ className = "" }: { className?: string }) {
  return (
    <Plus aria-hidden="true" className={`cross ${className}`} strokeWidth={1} />
  );
}
