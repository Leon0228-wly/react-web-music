const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: { '@': resolve('src') },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 保留对项目原有 less 的支持
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            // 移除对 antd.less 的引用
            // 新增项目全局变量/混合（不影响 antd）
            modifyVars: {
              '@my-primary-color': '#1890ff' // 示例自定义变量
            },
          }
        }
      }
    }
  ]
};
