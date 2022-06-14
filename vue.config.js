const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   pluginOptions: {
//     electronBuilder: {
//       nodeIntegration: true
//     }
//   }
// }

//check this out
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/main.scss";
        `,
      },
    },
  },

  configureWebpack: {
    externals: {
      sequelize: "require('sequelize')",
    },
  },

  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: ['sequelize'],
      builderOptions: {
        extraResources: ['src/database.db'],
      },
    }
  },
};