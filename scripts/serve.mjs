import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".ico": "image/x-icon",
};
try {
  await fs.access(path.join(root, "index.html"));
} catch {
  console.error("Build not found. Run pnpm build first.");
  process.exit(1);
}
http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(
        new URL(request.url || "/", "http://localhost").pathname,
      );
      const file = path.resolve(
        root,
        `.${pathname === "/" ? "/index.html" : pathname}`,
      );
      if (!file.startsWith(root + path.sep)) {
        response.writeHead(403);
        response.end();
        return;
      }
      const contents = await fs.readFile(file);
      response.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
      });
      response.end(contents);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Local: http://127.0.0.1:${port}`),
  );
