import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      "react/display-name": "off", // disable the broken rule
    },
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
]);
