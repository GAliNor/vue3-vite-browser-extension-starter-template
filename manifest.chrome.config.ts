import ManifestConfig from "./manifest.config"


export const chromeManifest = {
  ...ManifestConfig,
  name: "My Chrome Extension",
  host_permissions: ["https://*.google.com/"],
};