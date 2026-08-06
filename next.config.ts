import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "aryansinghnagar.github.io";

const nextConfig: NextConfig = {
  output: "standalone",
  // For GitHub Pages deployment, we need to handle the base path.
  // Since we're using a root-level username.github.io repo, basePath is "/".
  // If you move to a project repo (username.github.io/repo-name), uncomment:
  // basePath: isGitHubPages ? `/${repoName}` : "",
  // assetPrefix: isGitHubPages ? `/${repoName}/` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
