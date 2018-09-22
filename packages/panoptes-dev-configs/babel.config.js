const inlineImportDataUri = require('babel-plugin-inline-import-data-uri');
module.exports = {
  presets: ["next/babel"],
  plugins: [inlineImportDataUri]
};

