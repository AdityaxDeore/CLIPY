import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // e.g. "AdityaxDeore/CLIPY" -> "CLIPY"
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || '';
  if (repo) {
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath,
};

export default nextConfig;
