# VEO3 网站 SEO Canonical 标签设置文档

## 📋 概述

本文档说明了VEO3网站如何实现SEO优化，特别是canonical标签的设置。我们使用原生React和DOM API来管理SEO元数据，确保与React 19的完全兼容性。

## 🔧 技术实现

### 1. SEO 组件
- **文件**: `src/components/SEOHead.tsx`
- **功能**: 统一管理所有页面的 SEO 元数据
- **库**: 原生React (useEffect + DOM API)

### 2. 应用配置
- **文件**: `src/App.tsx`
- **配置**: 添加了 `HelmetProvider` 包装器

## 📄 页面 Canonical 设置

### 主要页面

| 页面 | 路径 | Canonical URL | 语言 |
|------|------|---------------|------|
| 中文首页 | `/` | `https://veo3.ai/` | zh-CN |
| 功能页面 | `/features` | `https://veo3.ai/features` | zh-CN |
| 定价页面 | `/pricing` | `https://veo3.ai/pricing` | zh-CN |
| 多语言展示 | `/languages` | `https://veo3.ai/languages` | zh-CN |

### 多语言页面

| 页面 | 路径 | Canonical URL | 语言 |
|------|------|---------------|------|
| 英文首页 | `/home-en` | `https://veo3.ai/home-en` | en-US |
| 日文首页 | `/home-jp` | `https://veo3.ai/home-jp` | ja-JP |
| 韩文首页 | `/home-kr` | `https://veo3.ai/home-kr` | ko-KR |
| 德文首页 | `/home-de` | `https://veo3.ai/home-de` | de-DE |
| 法文首页 | `/home-fr` | `https://veo3.ai/home-fr` | fr-FR |

## 🌍 SEO 元数据特色

### 中文首页 (/)
- **标题**: VEO3 - AI视频生成平台 | 专业智能视频制作工具
- **描述**: VEO3是领先的AI视频生成平台，提供专业的智能视频制作工具
- **关键词**: AI视频生成,智能视频制作,视频AI工具

### 英文版 (/home-en)
- **标题**: VEO3 - AI Video Generation Platform | Professional AI Video Creation
- **描述**: VEO3 is the leading AI video generation platform offering professional video creation tools
- **关键词**: AI video generation,video AI tool,automated video creation

### 日文版 (/home-jp)
- **标题**: VEO3 - AI動画生成プラットフォーム | プロフェッショナルな動画制作ツール
- **描述**: VEO3は最先端のAI技術で美しい動画を簡単に作成できるプラットフォームです
- **关键词**: AI動画生成,動画AI,自動動画作成

### 韩文版 (/home-kr)
- **标题**: VEO3 - AI 비디오 생성 플랫폼 | 전문 AI 비디오 제작 도구
- **描述**: VEO3는 최첨단 AI 기술로 트렌디한 비디오를 쉽게 만들 수 있는 플랫폼입니다
- **关键词**: AI 비디오 생성,비디오 AI,자동 비디오 제작

### 德文版 (/home-de)
- **标题**: VEO3 - AI-Video-Generierungsplattform | Professionelle KI-Video-Erstellung
- **描述**: VEO3 ist die führende AI-Video-Generierungsplattform mit deutschen Qualitätsstandards
- **关键词**: AI Video Generierung,Video KI,automatische Video Erstellung

### 法文版 (/home-fr)
- **标题**: VEO3 - Plateforme de Génération Vidéo IA | Création Vidéo Professionnelle
- **描述**: VEO3 est la plateforme française de génération vidéo par IA offrant des outils de création professionnels
- **关键词**: génération vidéo IA,vidéo IA,création vidéo automatique

## 🔍 SEO 优化特性

### 1. Canonical 标签
- ✅ 每个页面都有唯一的 canonical URL
- ✅ Canonical URL 与访问 URL 完全一致
- ✅ 使用完整的绝对 URL (https://veo3.ai)

### 2. 语言标签
- ✅ 每个页面都有正确的 `lang` 属性
- ✅ Open Graph `og:locale` 设置正确
- ✅ 多语言页面使用对应的语言代码

### 3. Open Graph 标签
- ✅ `og:title` - 页面标题
- ✅ `og:description` - 页面描述
- ✅ `og:url` - Canonical URL
- ✅ `og:type` - 网站类型
- ✅ `og:locale` - 语言设置

### 4. Twitter Card 标签
- ✅ `twitter:card` - summary_large_image
- ✅ `twitter:title` - 页面标题
- ✅ `twitter:description` - 页面描述

### 5. 其他 SEO 标签
- ✅ `meta description` - 页面描述
- ✅ `meta keywords` - 关键词
- ✅ `meta robots` - index, follow
- ✅ `meta viewport` - 移动端优化

## 🚀 使用方法

在任何页面组件中使用 SEOHead 组件：

```tsx
import SEOHead from '../components/SEOHead';

const YourPage: React.FC = () => {
  return (
    <Box>
      <SEOHead
        title="页面标题"
        description="页面描述"
        canonical="/your-page-url"
        language="zh-CN"
        keywords="关键词1,关键词2,关键词3"
        ogTitle="Open Graph 标题"
        ogDescription="Open Graph 描述"
      />
      {/* 页面内容 */}
    </Box>
  );
};
```

## ✅ 验证

可以通过以下方式验证 Canonical 标签设置：

1. **浏览器开发者工具**: 查看 `<head>` 中的 `<link rel="canonical">` 标签
2. **SEO 工具**: 使用 Google Search Console 或其他 SEO 工具检查
3. **源代码查看**: 右键查看页面源代码，确认 canonical 标签存在

## 📝 注意事项

1. **域名配置**: 当前使用 `https://veo3.ai` 作为基础域名，部署时需要更新为实际域名
2. **路由一致性**: 确保 canonical URL 与 React Router 路由完全一致
3. **语言代码**: 使用标准的 ISO 语言代码 (zh-CN, en-US, ja-JP 等)
4. **更新维护**: 新增页面时记得添加相应的 SEOHead 组件

---

**最后更新**: 2025年5月24日
**状态**: ✅ 已完成所有页面的 Canonical 标签设置 