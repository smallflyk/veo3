import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import PricingSection from '../components/home/PricingSection';
import FaqSection from '../components/home/FaqSection';
import { Box } from '@mui/material';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
  return (
    <Box>
      <SEOHead
        title="VEO3 - AI视频生成平台 | 专业智能视频制作工具"
        description="VEO3是领先的AI视频生成平台，提供专业的智能视频制作工具。一键生成高质量视频内容，支持多种场景应用，助力企业和个人快速创建优质视频。"
        canonical="/"
        language="zh-CN"
        keywords="AI视频生成,智能视频制作,视频AI工具,自动视频制作,VEO3,人工智能视频"
        ogTitle="VEO3 - 领先的AI视频生成平台"
        ogDescription="使用VEO3 AI技术，轻松创建专业级视频内容。支持多场景应用，高效便捷的智能视频制作解决方案。"
      />
      <HeroSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <PricingSection />
      <FaqSection />
    </Box>
  );
};

export default HomePage; 