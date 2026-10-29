"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Motion() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".hero-photo", {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.inOut",
        })
        .from(".hero-image", { scale: 1.1, duration: 1.7 }, 0)
        .from(
          ".hero-line > span",
          { yPercent: 110, rotate: 2, duration: 0.9, stagger: 0.13 },
          0.3,
        )
        .from(
          ".hero-eyebrow, .hero-copy",
          { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 },
          0.75,
        )
        .from(".hero-bottom, .hero-rail", { opacity: 0, duration: 0.7 }, 1.05);
      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((el) =>
          gsap.from(el, {
            y: 36,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 91%", once: true },
          }),
        );
      gsap.utils
        .toArray<HTMLElement>("[data-photo-reveal]")
        .forEach((el) =>
          gsap.from(el, {
            clipPath: "inset(12% 0% 0% 0%)",
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 94%", once: true },
          }),
        );
      gsap.utils
        .toArray<HTMLElement>("[data-manifesto]")
        .forEach((el) =>
          gsap.fromTo(
            el,
            { opacity: 0.15, y: 22 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                end: "top 56%",
                scrub: 0.6,
              },
            },
          ),
        );
    });
    media.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(".hero-image", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero-content", {
          y: -65,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.utils
          .toArray<HTMLElement>("[data-parallax]")
          .forEach((image) =>
            gsap.fromTo(
              image,
              { yPercent: -6, scale: 1.14 },
              {
                yPercent: 6,
                scale: 1.14,
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.7,
                },
              },
            ),
          );
      },
    );
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts.ready.then(refresh);
    return () => {
      media.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);
  return null;
}
