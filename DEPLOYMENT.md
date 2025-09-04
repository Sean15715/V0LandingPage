# GitHub Pages 部署指南

## 部署步骤

### 1. 推送代码到GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. 启用GitHub Pages
1. 进入你的GitHub仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 下选择 **GitHub Actions**
5. 保存设置

### 3. 配置自定义域名（可选）
如果你有自己的域名：

1. 在仓库根目录创建 `CNAME` 文件：
```bash
echo "yourdomain.com" > CNAME
```

2. 在域名提供商处添加CNAME记录：
   - 类型：CNAME
   - 名称：www（或@）
   - 值：yourusername.github.io

3. 在GitHub Pages设置中启用 **Enforce HTTPS**

### 4. 访问你的网站
- GitHub Pages URL: `https://yourusername.github.io/V0LandingPage/`
- 自定义域名: `https://yourdomain.com`

## 本地测试
```bash
# 安装依赖
npm install

# 构建静态文件
npm run build

# 预览构建结果
npx serve out
```

## 问题解决
如果遇到依赖冲突问题：
- 已移除未使用的 `vaul` 依赖以解决React 19兼容性问题
- GitHub Actions工作流已配置 `--legacy-peer-deps` 标志作为备用方案

## 注意事项
- 每次推送到main分支都会自动部署
- 部署过程大约需要2-5分钟
- 确保所有图片和资源路径正确
- EmailJS功能在静态部署中正常工作
