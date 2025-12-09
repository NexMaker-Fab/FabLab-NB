# UNNC-FabLab 课程站点

本目录使用 VitePress 构建课程与同学作业的静态站点。

## 本地运行

```bash
cd courses
npm install
npm run docs:dev
```

打开提示的本地地址预览站点。

## 构建发布

```bash
npm run docs:build
```

构建输出在 `courses/docs/.vitepress/dist` 目录。