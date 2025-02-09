import ManifestConfig from "./manifest.config"


export const firefoxManifest = {
  ...ManifestConfig,
  name: "My Firefox Extension",
  browser_specific_settings: {
    gecko: {
      id: "my-extension@example.com",
      strict_min_version: "109.0",
    },
  },
  background: {
    scripts: ["src/background/index.ts"],
    type: "module",
    persistent: false,
  },
  permissions: [
    ...ManifestConfig.permissions.filter(
      (permission) => permission !== "background",
    ),
  ]
};
