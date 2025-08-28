// @ts-check

const PROD_URL = "https://vovk-hello-world.vercel.app";
// Commented lines indicate default values
/** @type {import('vovk').VovkConfig} */
const config = {
  generatorConfig: {
    // origin: '/',
    imports: {
      validateOnClient: "vovk-ajv",
    },
  },

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
  bundle: {
    generatorConfig: { origin: PROD_URL },
  },
  clientTemplateDefs: {
    py: {
      extends: "py",
      generatorConfig: { origin: PROD_URL },
      composedClient: {
        // outDir: "./dist_python",
      },
    },
    rs: {
      extends: "rs",
      generatorConfig: { origin: PROD_URL },
      composedClient: {
        // outDir: "./dist_rust",
      },
    },
  },
  moduleTemplates: {
    controller: "vovk-zod/module-templates/controller.ts.ejs",
    service: "vovk-cli/module-templates/service.ts.ejs",
  },
};
module.exports = config;
