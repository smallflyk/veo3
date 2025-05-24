import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  language?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  language = 'zh-CN',
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website'
}) => {
  useEffect(() => {
    const baseUrl = 'https://veo3.ai';
    const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
    const fullOgImage = ogImage?.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    // 设置标题
    document.title = title;

    // Google Analytics 页面浏览跟踪
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-XT1320Q2E4', {
        page_title: title,
        page_location: fullCanonical
      });
    }

    // 设置或更新meta标签的函数
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 设置或更新link标签的函数
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 设置基础SEO标签
    setMetaTag('description', description);
    setMetaTag('language', language);
    if (keywords) setMetaTag('keywords', keywords);

    // 设置Canonical标签
    setLinkTag('canonical', fullCanonical);

    // 设置Open Graph标签
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', fullCanonical, true);
    if (fullOgImage) setMetaTag('og:image', fullOgImage, true);
    setMetaTag('og:locale', language, true);

    // 设置Twitter Card标签
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    if (fullOgImage) setMetaTag('twitter:image', fullOgImage);

    // 设置html lang属性
    document.documentElement.lang = language;

    // 设置viewport和robots标签
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('robots', 'index, follow');

  }, [title, description, canonical, language, keywords, ogTitle, ogDescription, ogImage, ogType]);

  return null; // 这个组件不渲染任何内容
};

export default SEOHead; 