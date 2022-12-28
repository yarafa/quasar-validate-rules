/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf(conf) {
  // make sure my-ext boot file is registered
  conf.boot.push("~quasar-validate-rules/src/boot/rules.js");

  // make sure boot & component files get transpiled
  if (conf.build.transpileDependencies !== undefined) {
    // quasar/app-vite does not have transpileDependencies
    conf.build.transpileDependencies.push(/quasar-validate-rules[\\/]src/);
  }
}

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith("quasar", "^1.8.5  || >= 2");
  if (api.hasVite) {
    api.compatibleWith("@quasar/app-vite", "^1.0.0-beta.0");
  } else {
    api.compatibleWith("@quasar/app", "^1.0.0  || >= 2");
  }

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf);
};
