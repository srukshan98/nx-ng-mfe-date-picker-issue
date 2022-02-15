const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const { MaterialSharedLibs } = require('../../mf-material.shared');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@lib/material'
]);

module.exports = {
  output: {
    uniqueName: 'remote',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      // name: 'remote',
      // filename: 'remoteEntry.js',
      // exposes: {
      //   './RemoteModule': './apps/remote/src/app/remote/remote.module.ts',
      //   './RemoteAnimateModule': './apps/remote/src/app/remote-animate/remote-animate.module.ts'
      // },
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteModule': './apps/remote/src/app/remote/remote.module.ts',
        './RemoteAnimateComponent': './apps/remote/src/app/remote/remote-animate/remote-animate.component.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "container": "container@http://localhost:4200/remoteEntry.js",

      // },

      shared: [
        {
          ...sharedMappings.getDescriptors(),
        },
        '@angular/core',
        '@angular/common',
        '@angular/common/http',
        '@angular/router',
        ...MaterialSharedLibs,
      ],
    }),
    sharedMappings.getPlugin(),
  ],
};
