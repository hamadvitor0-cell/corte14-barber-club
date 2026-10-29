"use client";
import type { ImageLoaderProps } from "next/image";
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const name = src
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "");
  return `/images/optimized/${name}-${width}.webp`;
}
