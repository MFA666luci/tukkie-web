import type { NextConfig } from "next";

const repoName = "tukkie-web";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath: `/${repoName}`,
      images: {
        unoptimized: true,
      },
    }
  : {
      images: {
        formats: ["image/avif", "image/webp"],
      },
    };

export default nextConfig;
