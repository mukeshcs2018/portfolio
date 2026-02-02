import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = isGitHubActions
  ? process.env.GITHUB_REPOSITORY?.split("/")?.[1] ?? ""
  : "";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const base = repoName ? (isUserOrOrgSite ? "/" : `/${repoName}/`) : "/";

export default defineConfig({
  base,
  plugins: [react()],
});


