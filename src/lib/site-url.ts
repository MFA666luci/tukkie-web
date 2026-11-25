const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
