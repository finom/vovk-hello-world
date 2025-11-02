// @ts-check

const PROD_URL = "https://hello-world.vovk.dev";
// Commented lines indicate default values
/** @type {import('vovk').VovkConfig} */
const config = {
  logLevel: "debug",
  outputConfig: {
    // origin: '',
    imports: {
      validateOnClient: "vovk-ajv",
    },
    openAPIObject: {
      info: {
        title: '"Hello World" app API',
        description:
          'API for "Hello World" app hosted at https://hello-world.vovk.dev/. Source code is available on Github https://github.com/finom/vovk-hello-world.',
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
  segmentedClient: {
    // fromTemplates: ["mjs", "cjs"],
    enabled: true,
    // outDir: "./src/client",
  },
  bundle: {
    outputConfig: { origin: PROD_URL },
    keepPrebundleDir: true,
    tsdownBuildOptions: { 
      tsconfig: "./tsconfig.bundle.json",
      // outDir: "./dist" 
    },
  },
  clientTemplateDefs: {
    py: {
      extends: "py",
      outputConfig: { origin: PROD_URL },
      // composedClient: { outDir: "./dist_python" },
    },
    rs: {
      extends: "rs",
      outputConfig: { origin: PROD_URL },
      // composedClient: { outDir: "./dist_rust" },
    },
  }
};

module.exports = config;
