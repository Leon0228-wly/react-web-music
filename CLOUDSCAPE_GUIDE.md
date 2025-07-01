# Cloudscape Design 组件库使用指南

## 1. 安装

```bash
npm install @cloudscape-design/components @cloudscape-design/global-styles
```

## 2. 基本使用

### 导入样式
在每个使用 Cloudscape Design 组件的文件中，都需要导入全局样式：

```tsx
import '@cloudscape-design/global-styles/index.css';
```

### 导入组件
```tsx
import { Button, Container, Header } from '@cloudscape-design/components';
```

## 3. 常用组件示例

### 按钮 (Button)
```tsx
import Button from '@cloudscape-design/components/button';

<Button variant="primary">主要按钮</Button>
<Button variant="normal">普通按钮</Button>
<Button variant="link">链接按钮</Button>
```

### 容器 (Container)
```tsx
import Container from '@cloudscape-design/components/container';

<Container>
  <div>你的内容</div>
</Container>
```

### 标题 (Header)
```tsx
import Header from '@cloudscape-design/components/header';

<Header variant="h1">一级标题</Header>
<Header variant="h2">二级标题</Header>
<Header variant="h3">三级标题</Header>
```

### 间距 (SpaceBetween)
```tsx
import SpaceBetween from '@cloudscape-design/components/space-between';

<SpaceBetween size="l">
  <div>元素1</div>
  <div>元素2</div>
</SpaceBetween>
```

### 输入框 (Input)
```tsx
import Input from '@cloudscape-design/components/input';

<Input
  value={value}
  onChange={({ detail }) => setValue(detail.value)}
  placeholder="请输入..."
/>
```

### 下拉选择 (Select)
```tsx
import Select, { SelectProps } from '@cloudscape-design/components/select';

const options: SelectProps.Options = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' }
];

<Select
  selectedOption={selectedOption}
  onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
  options={options}
  placeholder="请选择..."
/>
```

### 模态框 (Modal)
```tsx
import Modal from '@cloudscape-design/components/modal';

<Modal
  visible={visible}
  onDismiss={() => setVisible(false)}
  header="标题"
  size="medium"
>
  <div>模态框内容</div>
</Modal>
```

### 警告框 (Alert)
```tsx
import Alert from '@cloudscape-design/components/alert';

<Alert
  type="info"
  header="信息标题"
>
  这是警告框的内容
</Alert>
```

## 4. 布局组件

### Box
用于创建简单的容器：
```tsx
import Box from '@cloudscape-design/components/box';

<Box>
  <div>内容</div>
</Box>
```

### Grid
用于创建网格布局：
```tsx
import Grid from '@cloudscape-design/components/grid';

<Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
  <div>左侧内容</div>
  <div>右侧内容</div>
</Grid>
```

## 5. 表单组件

### FormField
用于包装表单控件：
```tsx
import FormField from '@cloudscape-design/components/form-field';

<FormField label="标签">
  <Input placeholder="请输入..." />
</FormField>
```

## 6. 最佳实践

1. **导入样式**：确保在每个使用组件的文件中导入全局样式
2. **使用 TypeScript**：Cloudscape Design 提供完整的 TypeScript 支持
3. **响应式设计**：使用 Grid 和 SpaceBetween 组件创建响应式布局
4. **无障碍性**：组件库内置了无障碍性支持

## 7. 主题定制

Cloudscape Design 支持主题定制，可以通过 CSS 变量来自定义样式：

```css
:root {
  --color-background-layout-main: #f8f9fa;
  --color-background-layout: #ffffff;
}
```

## 8. 更多资源

- [官方文档](https://cloudscape.design/)
- [组件 API 参考](https://cloudscape.design/components/)
- [设计指南](https://cloudscape.design/guidelines/)

## 9. 示例项目

查看 `src-test/test/cloudscape-example.tsx` 文件，了解完整的使用示例。 