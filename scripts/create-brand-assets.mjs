import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 94" fill="none" role="img" aria-label="Corte 14 — Barber Club"><g fill="COLOR"><path d="M43 12H14V58H43V47H26V23H43V12ZM51 12H85V58H51V12ZM63 23V47H73V23H63ZM94 12H127V39H119L131 58H117L106 39V58H94V12ZM106 23V29H115V23H106ZM135 12H173V23H160V58H148V23H135V12ZM181 12H213V23H193V29H209V40H193V47H213V58H181V12ZM236 12H253V58H241V25H230L236 12ZM267 12H279V32H291V12H303V58H291V43H267V12ZM229 65H305V68H229V65Z"/></g><text x="15" y="85" fill="COLOR" font-family="Arial,sans-serif" font-size="11" font-weight="600" letter-spacing="8.2">BARBER CLUB</text><path d="M320 10L312 61" stroke="COLOR" stroke-width="2"/></svg>`;
await fs.mkdir("public/logos", { recursive: true });
for (const [name, color] of [
  ["white", "#F3F1E9"],
  ["black", "#111210"],
  ["lime", "#D6DE55"],
])
  await fs.writeFile(
    path.join("public/logos", `corte14-${name}.svg`),
    logo.replaceAll("COLOR", color),
  );
const background = await sharp("public/images/hero-concept.jpg")
  .resize(1200, 630, { fit: "cover" })
  .grayscale()
  .modulate({ brightness: 0.35 })
  .toBuffer();
const cover = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect x="58" y="75" width="43" height="4" fill="#D6DE55"/><text x="58" y="148" font-family="Arial,sans-serif" font-size="18" fill="#F3F1E9" letter-spacing="5">CORTE 14 / BARBER CLUB</text><text x="52" y="300" font-family="Arial,sans-serif" font-weight="bold" font-size="100" fill="#F3F1E9" letter-spacing="-5">NÃO É SÓ</text><text x="52" y="410" font-family="Arial,sans-serif" font-weight="bold" font-size="100" fill="#F3F1E9" letter-spacing="-5">UM CORTE<tspan fill="#D6DE55">.</tspan></text><text x="58" y="552" font-family="Arial,sans-serif" font-size="13" fill="#C7C8C0" letter-spacing="3">PROJETO CONCEITUAL — VIHAM DEV</text></svg>`;
await sharp(background)
  .composite([{ input: Buffer.from(cover) }])
  .jpeg({ quality: 88 })
  .toFile("public/images/og-cover-concept.jpg");
console.log("Created 3 vector logo versions and Open Graph cover.");
