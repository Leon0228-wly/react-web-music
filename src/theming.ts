import { applyTheme } from '@cloudscape-design/components/theming';

// 定义你的主题
const theme = {
  tokens: {
    // 主布局背景色（浅色/深色模式）
    colorBackgroundLayoutMain: {
      light: 'pink', // 浅色模式
      dark: '#222831'   // 深色模式
    },
    // 强调色（如链接、按钮等高亮文本）
    colorTextAccent: '#e91e63',
    // 按钮圆角
    borderRadiusButton: '8px',
    // 全局基础字体
    fontFamilyBase: "'PingFang SC', 'Microsoft YaHei', Arial, sans-serif",
    colorTextBodyDefault: '#000'
  },
  contexts: {
    // 顶部导航栏专用的 token 配置（如强调色）
    'top-navigation': {
       tokens: {
          // 顶部导航栏的强调色
          colorTextAccent: 'pink',
       },
    },
    // 页眉区域的 token 配置（此处未自定义）
    header: {tokens: {

    } },
    // Flashbar（通知条）区域的 token 配置（此处未自定义）
    flashbar: {tokens: {} },
    // Alert（警告/提示）区域的 token 配置（此处未自定义）
    alert: {tokens: {} },
 },
};

export function setupCloudscapeTheme() {
    applyTheme({ theme });
  }