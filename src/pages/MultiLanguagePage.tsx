import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PublicIcon from '@mui/icons-material/Public';
import PaletteIcon from '@mui/icons-material/Palette';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HomeIcon from '@mui/icons-material/Home';

interface LanguageVariant {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  route: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  icon: React.ReactNode;
}

const languageVariants: LanguageVariant[] = [
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳',
    route: '/',
    description: '原版首页，现代简洁的设计风格',
    features: ['现代设计', 'AI驱动', '用户友好', '响应式布局'],
    color: '#1976d2',
    gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
    icon: <HomeIcon sx={{ fontSize: 40 }} />
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    route: '/home-en',
    description: 'Modern professional design for international audience',
    features: ['Enterprise Grade', 'Lightning Fast', 'Secure', 'Scalable'],
    color: '#2196f3',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: <PublicIcon sx={{ fontSize: 40 }} />
  },
  {
    code: 'jp',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    route: '/home-jp',
    description: '精致细腻的日式设计，注重细节和美感',
    features: ['美的センス', '匠の技術', 'おもてなし', '高品質'],
    color: '#e91e63',
    gradient: 'linear-gradient(135deg, #fce4ec 0%, #e1bee7 100%)',
    icon: <PaletteIcon sx={{ fontSize: 40 }} />
  },
  {
    code: 'kr',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    route: '/home-kr',
    description: '时尚潮流的韩式设计，充满活力和创新',
    features: ['K-스타일', '트렌디', '혁신적', '감각적'],
    color: '#ff4081',
    gradient: 'linear-gradient(135deg, #ff4081 0%, #9c27b0 100%)',
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    route: '/home-de',
    description: '专业严谨的德式设计，注重功能和品质',
    features: ['Präzision', 'Qualität', 'Effizienz', 'Sicherheit'],
    color: '#1976d2',
    gradient: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    route: '/home-fr',
    description: '优雅艺术的法式设计，浪漫而富有创意',
    features: ['Élégance', 'Créativité', 'Raffinement', 'Art'],
    color: '#9c27b0',
    gradient: 'linear-gradient(135deg, #9c27b0 0%, #2196f3 100%)',
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />
  }
];

const MultiLanguagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
      <SEOHead
        title="VEO3 多语言版本 | 全球化AI视频生成平台"
        description="探索VEO3的多语言版本，每个版本都有独特的设计风格。支持中文、英文、日文、韩文、德文、法文，体验不同文化的审美特色。"
        canonical="/languages"
        language="zh-CN"
        keywords="VEO3多语言,国际化视频平台,多语言AI工具,全球化设计,文化本地化"
        ogTitle="VEO3 多语言版本 - 体验全球化设计"
        ogDescription="每个语言版本都有独特的设计风格，体现不同文化的审美特色和使用习惯。"
      />
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Chip
                label="🌍 多语言版本展示"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                VEO3 多语言首页
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}
              >
                每个语言版本都有独特的设计风格，
                <br />
                体现不同文化的审美特色和使用习惯
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Language Variants Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {languageVariants.map((variant, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={variant.code}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    },
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(variant.route)}
                >
                  {/* Header with gradient */}
                  <Box
                    sx={{
                      height: 120,
                      background: variant.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      position: 'relative',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h3" sx={{ mb: 1 }}>
                        {variant.flag}
                      </Typography>
                      <Box sx={{ color: variant.color }}>
                        {variant.icon}
                      </Box>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {variant.nativeName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {variant.name}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {variant.description}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                        特色功能:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {variant.features.map((feature, featureIndex) => (
                          <Chip
                            key={featureIndex}
                            label={feature}
                            size="small"
                            sx={{
                              bgcolor: `${variant.color}15`,
                              color: variant.color,
                              fontSize: '0.7rem',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Button
                      component={Link}
                      to={variant.route}
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: variant.color,
                        '&:hover': {
                          bgcolor: variant.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      查看 {variant.nativeName} 版本
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: 'center', mb: 4, fontWeight: 700 }}
            >
              设计特色
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 3,
                    bgcolor: 'rgba(25, 118, 210, 0.05)',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    🎨 文化特色设计
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    每个语言版本都融入了当地的文化特色和审美观念
                  </Typography>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 3,
                    bgcolor: 'rgba(156, 39, 176, 0.05)',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    🌍 用户习惯适配
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    根据不同地区用户的使用习惯优化界面和交互
                  </Typography>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 64, 129, 0.05)',
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    ✨ 独特视觉体验
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    每个版本都有独特的配色方案和视觉效果
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default MultiLanguagePage; 