import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia,
  Button,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const features = [
  {
    title: '高质量视频生成',
    description: '利用先进的AI技术，生成4K高清视频内容，具有真实的物理效果和精确的细节。无论是自然场景、人物动作还是抽象概念，VEO3都能将您的创意变为现实。',
    icon: <MovieFilterIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Video+Generation',
  },
  {
    title: '音频同步生成',
    description: '自动生成与视频内容完美同步的音频，包括对话、音效和背景音乐。VEO3的音频生成技术能够理解场景上下文，提供自然、逼真的声音体验。',
    icon: <AudiotrackIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Audio+Sync',
  },
  {
    title: '创意控制功能',
    description: '提供摄像机控制、场景构建器等工具，让您完全掌控创作过程。您可以精确调整每个细节，确保最终成品完全符合您的创意愿景。',
    icon: <AutoFixHighIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Creative+Control',
  },
  {
    title: '云端渲染与存储',
    description: '所有处理都在云端完成，无需高性能设备，随时随地访问您的项目。VEO3的云端基础设施确保快速渲染和安全存储，让您的创作过程更加顺畅。',
    icon: <CloudUploadIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Cloud+Rendering',
  },
  {
    title: '摄像机控制',
    description: '精确控制视频中的摄像机角度、运动和效果，创造专业级的视觉体验。从平稳的推进镜头到动态的跟踪拍摄，VEO3让您轻松实现各种摄影技巧。',
    icon: <CameraAltIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Camera+Control',
  },
  {
    title: '风格定制',
    description: '选择或创建自定义视觉风格，应用于您的视频项目。从电影级滤镜到艺术化效果，VEO3提供丰富的风格选项，满足各种创意需求。',
    icon: <BrushIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Style+Customization',
  },
  {
    title: '内容安全保障',
    description: '内置内容审核和水印技术，确保生成的视频安全可靠且受到保护。VEO3严格遵守内容政策，防止生成不适当或有害的内容。',
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=Content+Safety',
  },
  {
    title: '高性能渲染',
    description: '优化的渲染引擎，确保快速生成高质量视频，节省您的时间和资源。VEO3的智能资源分配系统能够根据项目需求自动调整计算资源，提供最佳性能。',
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    image: 'https://via.placeholder.com/600x400?text=High+Performance',
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <SEOHead
        title="VEO3 功能特色 | AI视频生成平台功能详解"
        description="深入了解VEO3 AI视频生成平台的强大功能：高质量视频生成、音频同步、创意控制、云端渲染等。体验最先进的AI视频制作技术。"
        canonical="/features"
        language="zh-CN"
        keywords="VEO3功能,AI视频功能,视频生成技术,音频同步,创意控制,云端渲染"
        ogTitle="VEO3 功能特色 - 强大的AI视频生成功能"
        ogDescription="探索VEO3的全部功能：AI视频生成、音频同步、创意控制等，体验未来的视频制作技术。"
      />
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          py: { xs: 6, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
          >
            强大功能，无限可能
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            paragraph
            sx={{ mb: 4 }}
          >
            探索VEO3的全部功能，体验AI视频生成的未来
          </Typography>
        </Container>
      </Box>
      
      {/* Features List */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={8}>
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <Grid 
                size={{ xs: 12, md: 6 }}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  order: { xs: 1, md: index % 2 === 0 ? 1 : 2 }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ width: '100%' }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: 'primary.main', mr: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h4" component="h2">
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {feature.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
              <Grid 
                size={{ xs: 12, md: 6 }}
                sx={{ 
                  order: { xs: 2, md: index % 2 === 0 ? 2 : 1 }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card elevation={4}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={feature.image}
                      alt={feature.title}
                    />
                  </Card>
                </motion.div>
              </Grid>
              {index < features.length - 1 && (
                <Grid size={12}>
                  <Divider sx={{ my: 2 }} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Container>
      
      {/* Call to Action */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          py: 8,
          color: 'primary.contrastText',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            准备好开始创作了吗？
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            立即注册，体验VEO3的强大功能
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}
          >
            免费试用
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturesPage; 