// @ts-check
// Commented lines indicate default values
/** @type {import('vovk').VovkConfig} */
const config = {
  imports: {
    validateOnClient: "vovk-ajv",
  },
  origin: process.env.VERCEL_ENV ? `https://vovk-hello-world.vercel.app` : "http://localhost:3000",
  composedClient: {
    fromTemplates: ["mjs", "cjs", "py", "rs"],
    // enabled: true,
    // outDir: "./node_modules/.vovk-client",
  },
  /* bundle: {
    outDir: "./dist",
  }, */
  segmentedClient: {
    // fromTemplates: ["mjs", "cjs"],
    enabled: true,
    // outDir: "./src/client",
  },
  /* clientTemplateDefs: {
    py: {
      extends: 'py',
      composedClient: {
        outDir: "./dist_python",
      },
    },
    rs: {
      extends: 'rs',
      composedClient: {
        outDir: "./dist_rust",
      },
    },
  }, */
  moduleTemplates: {
    controller: "vovk-zod/module-templates/controller.ts.ejs",
    service: "vovk-cli/module-templates/service.ts.ejs",
  },
};
module.exports = config;
