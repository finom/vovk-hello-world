// @ts-check

const PROD_URL = "https://vovk-hello-world.vercel.app";
// Commented lines indicate default values
/** @type {import('vovk').VovkConfig} */
const config = {
  generatorConfig: {
    origin: 'http://localhost:3000',
    imports: {
      validateOnClient: "vovk-ajv",
    },
    openAPIObject: {
      info: {
        title: '"Hello World" app API',
        description:
          'API for "Hello World" app hosted at https://vovk-hello-world.vercel.app/. Source code is available on Github https://github.com/finom/vovk-hello-world.',
        license: {
          name: "MIT",
          url: "https://opensource.org/licenses/MIT",
        },
        version: "1.0.0",
      },
    }
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
    keepPrebundleDir: true,
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
