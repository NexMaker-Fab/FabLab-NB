#!/usr/bin/env bash
set -euo pipefail

# repo root
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
COURSES_DIR="$ROOT_DIR/courses"
COURSES_DIST="$COURSES_DIR/docs/.vitepress/dist"

# clean dist
rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

# 1) build courses (VitePress)
if [ -d "$COURSES_DIR" ]; then
  if command -v npm >/dev/null 2>&1; then
    pushd "$COURSES_DIR" >/dev/null
    # 强制安装 devDependencies，避免 CI 环境省略 dev 依赖
    if [ -f package-lock.json ]; then
      npm ci --include=dev
    else
      npm install --include=dev
    fi
    npm run docs:build
    popd >/dev/null
  else
    echo "npm 未安装，请先安装 Node.js 与 npm" >&2
    exit 1
  fi
else
  echo "未找到 courses 目录，跳过 VitePress 构建"
fi

# 2) copy root static site to dist (exclude sources not needed)
# 保留根目录的静态资源与页面（包括 CNAME）
rsync -av \
  --exclude ".git" \
  --exclude "node_modules" \
  --exclude "dist" \
  --exclude "scripts" \
  --exclude "courses" \
  "$ROOT_DIR/" "$DIST_DIR/"

# 3) put built courses under /courses
if [ -d "$COURSES_DIST" ]; then
  mkdir -p "$DIST_DIR/courses"
  rsync -av "$COURSES_DIST/" "$DIST_DIR/courses/"
fi

echo "打包完成：$DIST_DIR"
