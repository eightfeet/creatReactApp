const path = require('path');

const lessVariables = require('./config.themeVariable');

const { override, fixBabelImports, addLessLoader, setWebpackPublicPath, addWebpackAlias } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, // change importing css to less
    }),
    addLessLoader({
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: lessVariables,
        },
        additionalData: "@import 'node_modules/antd-mobile/lib/style/themes/default.less';"
    }),
    setWebpackPublicPath(process.env.REACT_APP_PUBLIC_PATH),
    addWebpackAlias({
      "~": path.resolve(__dirname, "./src"),
    })
);


