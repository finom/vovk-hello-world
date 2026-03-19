// @ts-check

const PROD_ORIGIN = 'https://hello-world.vovk.dev';
// Commented lines indicate default values
/** @type {import('vovk').VovkConfig} */
const config = {
  logLevel: 'debug',
  outputConfig: {
    imports: {
      validateOnClient: 'vovk-ajv',
    },
    openAPIObject: {
      info: {
        title: '"Hello World" app API',
        description:
          'API for "Hello World" app hosted at https://hello-world.vovk.dev/. Source code is available on Github https://github.com/finom/vovk-hello-world. For more information about this app, visit the documentation page https://vovk.dev/hello-world.',
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT',
        },
        version: '1.0.0',
      },
      servers: [
        {
          url: 'https://hello-world.vovk.dev',
          description: 'Production',
        },
        {
          url: 'http://localhost:3000',
          description: 'Localhost',
        },
      ],
    },
  },
  composedClient: {
    fromTemplates: ['js', 'py', 'rs'],
    // enabled: true,
    // outDir: "./node_modules/.vovk-client",
    outputConfig: {
      origin:
        process.env.NODE_ENV === 'production'
          ? null
          : `http://localhost:${process.env.PORT ?? 3000}`,
    },
    // prettifyClient: false,
  },
  segmentedClient: {
    // fromTemplates: ["ts"],
    enabled: true,
    // outDir: "./src/client",
    // outputConfig: { origin: '' },
    // prettifyClient: true,
  },
  bundle: {
    outputConfig: {
      origin: PROD_ORIGIN,
      imports: { validateOnClient: null },
      package: {
        type: 'module',
        main: './index.mjs',
        types: './index.d.mts',
        exports: {
          '.': {
            default: './index.mjs',
            types: './index.d.mts',
          },
        },
      },
    },
    keepPrebundleDir: true,
    build: async ({ entry, outDir }) => {
      const { build } = await import('tsup')

      await build({
        entry: { index: entry },
        format: ['esm'],
        target: 'es2020',
        outDir,
        dts: true,
        splitting: false,
        sourcemap: true,
        clean: true,
        minify: false,
        treeshake: true,
        external: ['react'],
        noExternal: ['vovk/**'],
        esbuildOptions(options) {
          options.banner = {
            js: '// My library build',
          }
        },
      });
    },
  },
  clientTemplateDefs: {
    py: {
      extends: 'py',
      outputConfig: { origin: PROD_ORIGIN },
      // composedClient: { outDir: "./dist_python" },
    },
    rs: {
      extends: 'rs',
      outputConfig: { origin: PROD_ORIGIN },
      // composedClient: { outDir: "./dist_rust" },
    },
  },
};

module.exports = config;
