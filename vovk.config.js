// @ts-check

const PROD_ORIGIN = "https://hello-world.vovk.dev";
// Commented lines indicate default values
/** @type {import('vovk').VovkConfig} */
const config = {
  logLevel: "debug",
  outputConfig: {
    origin: process.env.NODE_ENV === "production"
      ? PROD_ORIGIN
      : `http://localhost:${process.env.PORT ?? 3000}`,
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
    // fromTemplates: ["ts"],
    enabled: true,
    // outDir: "./src/client",
  },
  bundle: {
    outputConfig: { origin: PROD_ORIGIN },
    keepPrebundleDir: true,
    build: async ({ entry, outDir }) => {
      const { build } = await import('tsdown');
      await build({
        entry,
        dts: true,
        format: ['cjs', 'esm'],
        hash: false,
        fixedExtension: true,
        clean: true,
        outDir,
        tsconfig: './tsconfig.bundle.json',
      });
    },
  },
  clientTemplateDefs: {
    py: {
      extends: "py",
      outputConfig: { origin: PROD_ORIGIN },
      // composedClient: { outDir: "./dist_python" },
    },
    rs: {
      extends: "rs",
      outputConfig: { origin: PROD_ORIGIN },
      // composedClient: { outDir: "./dist_rust" },
    },
  }
};

module.exports = config;
