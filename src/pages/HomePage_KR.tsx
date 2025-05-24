import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomePage_KR: React.FC = () => {
  const features = [
    {
      title: 'AI 비디오 제작',
      description: '최첨단 AI 기술로 몇 분 만에 프로급 비디오를 제작하세요. K-스타일의 감각적인 영상을 손쉽게 만들어보세요.',
      icon: <FlashOnIcon sx={{ fontSize: 40, color: '#ff4081' }} />,
    },
    {
      title: '트렌디한 디자인',
      description: '한국의 트렌드를 반영한 세련된 템플릿들. 최신 K-culture 감성을 담은 비디오로 당신의 스토리를 표현하세요.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#ff4081' }} />,
    },
    {
      title: 'K-퀄리티',
      description: '한류 콘텐츠 수준의 높은 품질. 전 세계가 인정하는 한국의 콘텐츠 제작 노하우를 AI로 구현했습니다.',
      icon: <StarIcon sx={{ fontSize: 40, color: '#ff4081' }} />,
    },
    {
      title: '사랑받는 서비스',
      description: '사용자 중심의 친근한 서비스. 언제나 여러분의 편에서 최고의 경험을 제공합니다.',
      icon: <FavoriteIcon sx={{ fontSize: 40, color: '#ff4081' }} />,
    },
  ];

  const stats = [
    { number: '50만+', label: '제작된 영상' },
    { number: '1만+', label: '만족한 사용자' },
    { number: '전국', label: '서비스 지역' },
    { number: '99.9%', label: '서비스 가동률' },
  ];

  return (
    <Box sx={{ fontFamily: '"Noto Sans KR", "Malgun Gothic", sans-serif' }}>
      <SEOHead
        title="VEO3 - AI 비디오 생성 플랫폼 | 전문 AI 비디오 제작 도구"
        description="VEO3는 최첨단 AI 기술로 트렌디한 비디오를 쉽게 만들 수 있는 플랫폼입니다. K-스타일 감성을 담은 고품질 비디오 콘텐츠를 몇 분만에 생성하세요."
        canonical="/home-kr"
        language="ko-KR"
        keywords="AI 비디오 생성,비디오 AI,자동 비디오 제작,VEO3,인공지능 비디오,프로 비디오 제작"
        ogTitle="VEO3 - 트렌디한 AI 비디오 생성 플랫폼"
        ogDescription="AI로 K-스타일 감성을 담은 트렌디한 비디오를 제작하세요. 전문 편집 스킬 없이도 누구나 쉽게 고품질 영상을 만들 수 있습니다."
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
            color: '#ff4081',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              bgcolor: 'white',
            },
          }}
        >
          언어 버전
        </Button>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 30%, #9c27b0 70%, #673ab7 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Geometric Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            zIndex: 0,
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            zIndex: 0,
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Chip 
                  label="🔥 핫한 신기능: K-스타일 AI" 
                  sx={{ 
                    mb: 3, 
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 900,
                    mb: 3,
                    fontSize: { xs: '2.8rem', md: '4rem' },
                    lineHeight: 1.1,
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                  }}
                >
                  AI로 만드는
                  <br />
                  트렌디한 영상
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 4, 
                    fontWeight: 400,
                    lineHeight: 1.5,
                    opacity: 0.95
                  }}
                >
                  K-스타일 감성을 담은 영상을 몇 분만에!
                  <br />
                  전문 편집 스킬 없이도 누구나 쉽게.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: '#ff4081',
                      px: 5,
                      py: 2,
                      fontWeight: 700,
                      borderRadius: 25,
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.95)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(255, 255, 255, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    무료로 시작하기
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 5,
                      py: 2,
                      fontWeight: 600,
                      borderRadius: 25,
                      fontSize: '1.1rem',
                      borderWidth: '2px',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.15)',
                        borderWidth: '2px',
                      },
                    }}
                  >
                    데모 영상 보기
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '450px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 600, opacity: 0.9 }}>
                    🎬 K-스타일 영상 미리보기
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{ 
                textAlign: 'center', 
                mb: 8, 
                fontWeight: 800,
                color: '#2d2d2d',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              🚀 많은 분들이 사랑하는 VEO3
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
                      border: '2px solid transparent',
                      backgroundClip: 'padding-box',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 4,
                        padding: '2px',
                        background: 'linear-gradient(135deg, #ff4081, #e91e63, #9c27b0)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'subtract',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                      },
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(255, 64, 129, 0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{ 
                        fontWeight: 900, 
                        background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' }
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 600 }}>
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
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ 
                  fontWeight: 900, 
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 50%, #9c27b0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                왜 VEO3를 선택해야 할까요?
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: '700px', 
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                한국의 트렌드와 AI 기술의 완벽한 조합으로
                <br />
                세계 어디에서도 볼 수 없는 특별한 영상을 만들어보세요.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
                      border: '1px solid rgba(255, 64, 129, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(255, 64, 129, 0.15)',
                        border: '1px solid rgba(255, 64, 129, 0.3)',
                      },
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, rgba(255, 64, 129, 0.1) 0%, rgba(233, 30, 99, 0.1) 100%)',
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 3,
                        color: '#2d2d2d'
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.7,
                        fontSize: '1.1rem'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #ff4081 0%, #e91e63 30%, #9c27b0 70%, #673ab7 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
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
                variant="h2"
                component="h2"
                sx={{ 
                  fontWeight: 900, 
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                지금 바로 시작해보세요! 🚀
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 6, 
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                수많은 크리에이터와 기업들이 VEO3와 함께
                <br />
                트렌디한 영상 콘텐츠를 만들고 있습니다.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#ff4081',
                    px: 6,
                    py: 2.5,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    borderRadius: 25,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.95)',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  무료로 시작하기 ✨
                </Button>
                <Button
                  component={Link}
                  to="/pricing"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 6,
                    py: 2.5,
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    borderRadius: 25,
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.15)',
                      borderWidth: '2px',
                    },
                  }}
                >
                  요금제 보기
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Global Styles */}
      <Box
        component="style"
        sx={{ display: 'none' }}
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
          `
        }}
      />
    </Box>
  );
};

export default HomePage_KR; 