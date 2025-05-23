// @ts-check
/** @type {import('vovk').VovkConfig} */
const config = {
  imports: {
    validateOnClient: "vovk-ajv",
  },
  origin: "http://localhost:3000",
  composedClient: {
    fromTemplates: ["mjs", "cjs", "py", "rs"],
  },
  moduleTemplates: {
    controller: "vovk-zod/module-templates/controller.ts.ejs",
    service: "vovk-cli/module-templates/service.ts.ejs",
  },
};
module.exports = config;
