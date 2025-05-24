import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaletteIcon from '@mui/icons-material/Palette';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomePage_JP: React.FC = () => {
  const features = [
    {
      title: 'AI動画作成技術',
      description: '最先端のAI技術で、わずか数分でプロフェッショナルな動画を生成。美しい映像表現を簡単に実現できます。',
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: '#e91e63' }} />,
    },
    {
      title: '美的センスの追求',
      description: '日本の美意識を大切にした、洗練されたデザインテンプレート。細部まで丁寧に作り込まれた映像美。',
      icon: <PaletteIcon sx={{ fontSize: 40, color: '#e91e63' }} />,
    },
    {
      title: '匠の技術力',
      description: '職人のこだわりを込めた高品質な動画制作。一つ一つの作品に心を込めてお作りします。',
      icon: <PrecisionManufacturingIcon sx={{ fontSize: 40, color: '#e91e63' }} />,
    },
    {
      title: 'おもてなしの心',
      description: '利用者様のことを第一に考えた、温かみのあるサービス。安心してご利用いただけます。',
      icon: <FavoriteIcon sx={{ fontSize: 40, color: '#e91e63' }} />,
    },
  ];

  const stats = [
    { number: '50万+', label: '作成動画数' },
    { number: '1万+', label: 'ご利用者様' },
    { number: '全国', label: '対応地域' },
    { number: '99.9%', label: '稼働率' },
  ];

  return (
    <Box sx={{ fontFamily: '"Noto Sans JP", "Hiragino Sans", sans-serif' }}>
      <SEOHead
        title="VEO3 - AI動画生成プラットフォーム | プロフェッショナルな動画制作ツール"
        description="VEO3は最先端のAI技術で美しい動画を簡単に作成できるプラットフォームです。プロの編集スキル不要で、高品質な動画コンテンツを数分で生成できます。"
        canonical="/home-jp"
        language="ja-JP"
        keywords="AI動画生成,動画AI,自動動画作成,VEO3,人工知能動画,プロ動画制作"
        ogTitle="VEO3 - 心を込めたAI動画生成プラットフォーム"
        ogDescription="AIで美しい動画を心を込めて作成。日本の美意識を大切にした洗練されたデザインで、プロフェッショナルな動画を簡単に。"
      />
      {/* Back Button */}
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 1000,
        }}
      >
        <Button
          component={Link}
          to="/languages"
          startIcon={<ArrowBackIcon />}
          variant="contained"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            color: '#e91e63',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              bgcolor: 'white',
            },
          }}
        >
          言語版本
        </Button>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 50%, #e1bee7 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Cherry Blossom Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(233, 30, 99, 0.08) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Chip 
                  label="🌸 新機能：AI音声合成" 
                  sx={{ 
                    mb: 3, 
                    bgcolor: 'rgba(233, 30, 99, 0.1)', 
                    color: '#e91e63',
                    fontWeight: 500,
                    border: '1px solid rgba(233, 30, 99, 0.3)'
                  }}
                />
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.2rem', md: '3.2rem' },
                    lineHeight: 1.3,
                    color: '#2d2d2d',
                    letterSpacing: '0.02em',
                  }}
                >
                  AIで美しい動画を
                  <br />
                  心を込めて作成
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ 
                    mb: 4, 
                    color: '#555', 
                    fontWeight: 400,
                    lineHeight: 1.6 
                  }}
                >
                  あなたのアイデアを、わずか数分で美しい動画に。
                  <br />
                  プロの編集スキルは不要です。
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#e91e63',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(233, 30, 99, 0.3)',
                      '&:hover': {
                        bgcolor: '#d81b60',
                        boxShadow: '0 6px 16px rgba(233, 30, 99, 0.4)',
                      },
                    }}
                  >
                    無料でお試し
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#e91e63',
                      color: '#e91e63',
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: '#d81b60',
                        bgcolor: 'rgba(233, 30, 99, 0.05)',
                      },
                    }}
                  >
                    動画を見る
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: 'relative',
                    height: '400px',
                    background: 'linear-gradient(135deg, #fff 0%, #f9f9f9 100%)',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(233, 30, 99, 0.1)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#666', fontWeight: 400 }}>
                    🎬 動画プレビュー
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ 
                textAlign: 'center', 
                mb: 6, 
                fontWeight: 600,
                color: '#2d2d2d',
                letterSpacing: '0.02em'
              }}
            >
              多くの方にご愛用いただいています
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
                      border: '1px solid rgba(233, 30, 99, 0.05)',
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{ fontWeight: 700, color: '#e91e63', mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: '#2d2d2d',
                  letterSpacing: '0.02em'
                }}
              >
                VEO3の特徴
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: '600px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                日本の美意識と最先端のAI技術を融合し、
                <br />
                心に響く動画作成体験をお届けします。
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: 3,
                      border: '1px solid rgba(233, 30, 99, 0.08)',
                      background: 'linear-gradient(135deg, #fff 0%, #fefefe 100%)',
                      '&:hover': {
                        boxShadow: '0 8px 25px rgba(233, 30, 99, 0.15)',
                        transform: 'translateY(-3px)',
                        border: '1px solid rgba(233, 30, 99, 0.15)',
                      },
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: '#2d2d2d',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.7,
                        fontWeight: 400
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #e91e63 0%, #d81b60 50%, #c2185b 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            zIndex: 0,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 700, mb: 3, letterSpacing: '0.02em' }}
              >
                今すぐ始めませんか？
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                多くのクリエイターや企業様がVEO3をご利用いただき、
                <br />
                革新的な動画コンテンツを制作されています。
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#e91e63',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.95)',
                    },
                  }}
                >
                  無料でお試し開始
                </Button>
                <Button
                  component={Link}
                  to="/pricing"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  料金プランを見る
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage_JP; 