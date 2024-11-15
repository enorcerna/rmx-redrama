import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import deno from "@deno/vite-plugin";
import {fileURLToPath} from "node:url";

export default defineConfig({
  plugins: [
    deno(),
    remix({
      // serverModuleFormat: "esm",
      // ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths()
  ],
  resolve: {alias: {"~/": fileURLToPath(import.meta.resolve("./app/"))}}
});
