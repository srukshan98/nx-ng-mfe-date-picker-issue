const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), []);

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

      shared: {
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: "12.0.0", eager: true },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: "12.0.0", eager: true },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: "12.0.0", eager: true },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: "12.0.0", eager: true },
        "@angular/platform-browser": { strictVersion: true, requiredVersion: '12.2.13', eager: true },
        "@angular/cdk": { eager: true, strictVersion: true, requiredVersion: '12.2.13' },
        '@angular/material': { eager: true, singleton: true, strictVersion: true, requiredVersion: "12.2.13" },
        '@angular/material/core': { eager: true, singleton: true, strictVersion: true, requiredVersion: "12.2.13" },
        '@angular/material/datepicker': { eager: true, singleton: true, strictVersion: true, requiredVersion: "12.2.13" },
        '@angular/material/input': { eager: true, singleton: true, strictVersion: true, requiredVersion: "12.2.13" },
        '@angular/material/form-field': { eager: true, singleton: true, strictVersion: true, requiredVersion: "12.2.13" },
        '@angular/forms': { eager: true, singleton: true, strictVersion: true, requiredVersion: "12.0.0" },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
