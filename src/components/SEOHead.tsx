import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  const baseUrl = 'https://veo3.ai'; // 替换为实际域名
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`;
  const fullOgImage = ogImage?.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* 基础SEO标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="language" content={language} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical标签 */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph标签 */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      <meta property="og:locale" content={language} />
      
      {/* Twitter Card标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}
      
      {/* 语言相关标签 */}
      <html lang={language} />
      
      {/* 移动设备优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* 机器人指令 */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEOHead; 