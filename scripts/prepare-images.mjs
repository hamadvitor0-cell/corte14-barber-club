import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/images");
const destination = path.join(root, "optimized");
await fs.mkdir(destination, { recursive: true });
let generated = 0;
for (const file of await fs.readdir(root)) {
  if (!/\.jpe?g$/i.test(file) || file === "og-cover.jpg") continue;
  const original = path.join(root, file);
  const originalTime = (await fs.stat(original)).mtimeMs;
  for (const width of [384, 640, 960, 1280, 1920]) {
    const output = path.join(
      destination,
      `${file.replace(/\.[^.]+$/, "")}-${width}.webp`,
    );
    const existingTime = await fs
      .stat(output)
      .then((stat) => stat.mtimeMs)
      .catch(() => 0);
    if (existingTime >= originalTime) continue;
    await sharp(original)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(output);
    generated++;
  }
}
console.log(`Responsive images ready (${generated} WebP files updated).`);
