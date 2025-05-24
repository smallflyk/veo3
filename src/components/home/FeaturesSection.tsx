import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const features = [
  {
    title: '高质量视频生成',
    description: '利用先进的AI技术，生成4K高清视频内容，具有真实的物理效果和精确的细节。',
    icon: <MovieFilterIcon sx={{ fontSize: 48 }} />,
    path: '/features/video-generation',
  },
  {
    title: '音频同步生成',
    description: '自动生成与视频内容完美同步的音频，包括对话、音效和背景音乐。',
    icon: <AudiotrackIcon sx={{ fontSize: 48 }} />,
    path: '/features/audio-sync',
  },
  {
    title: '创意控制功能',
    description: '提供摄像机控制、场景构建器等工具，让您完全掌控创作过程。',
    icon: <AutoFixHighIcon sx={{ fontSize: 48 }} />,
    path: '/features/creative-control',
  },
  {
    title: '云端渲染与存储',
    description: '所有处理都在云端完成，无需高性能设备，随时随地访问您的项目。',
    icon: <CloudUploadIcon sx={{ fontSize: 48 }} />,
    path: '/features/cloud-rendering',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }
          }}
        >
          <Box 
            sx={{ 
              p: 2, 
              display: 'flex', 
              justifyContent: 'center', 
              color: 'primary.main' 
            }}
          >
            {feature.icon}
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {feature.description}
            </Typography>
          </CardContent>
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <Button 
              component={Link} 
              to={feature.path} 
              size="small" 
              color="primary"
            >
              了解更多
            </Button>
          </Box>
        </Card>
      </motion.div>
    </Grid>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h3"
            color="text.primary"
            gutterBottom
          >
            强大功能，无限可能
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2, maxWidth: 700, mx: 'auto' }}>
            探索VEO3的核心功能，体验AI视频生成的未来
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </Grid>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button 
            component={Link} 
            to="/features" 
            variant="contained" 
            color="primary" 
            size="large"
          >
            查看所有功能
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 