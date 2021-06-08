module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
};
chainWebpack: config => {
  config.plugins.delete('prefetch');
}
