import { defineConfig } from "vite";
import { sharedConfig } from "./vite.config";
import { fileURLToPath } from "url";
import path from "path";
import { chromeManifest } from "./manifest.chrome.config";
import { writeFileSync, mkdirSync, existsSync } from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
  ...sharedConfig,

  build: {
    ...sharedConfig.build,
    outDir: path.resolve(__dirname, "dist/chrome"),
  },

  plugins: [
    ...(sharedConfig.plugins || []),
    {
      name: "generate-chrome-manifest",
      apply: "build",
      buildEnd() {
        const distPath = path.resolve(__dirname, "dist/chrome");
        if (!existsSync(distPath)) mkdirSync(distPath, { recursive: true });

        writeFileSync(
          path.join(distPath, "manifest.json"),
          JSON.stringify(chromeManifest, null, 2)
        );
      },
    },
  ],
});
