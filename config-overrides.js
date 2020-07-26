const {
  addPostcssPlugins,
  fixBabelImports,
  override
} = require('customize-cra');

module.exports = override(
  addPostcssPlugins([require('postcss-aspect-ratio')]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
);
