import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomePage_EN: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Video Creation',
      description: 'Generate professional videos with cutting-edge AI technology in minutes.',
      icon: <PlayArrowIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Enterprise-Grade Performance',
      description: 'Scale your video production with robust infrastructure built for business.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Bank-Level Security',
      description: 'Your content is protected with industry-leading security protocols.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Lightning Fast',
      description: 'Create and export videos up to 10x faster than traditional methods.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  const stats = [
    { number: '500K+', label: 'Videos Created' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' },
  ];

  return (
    <Box>
      <SEOHead
        title="VEO3 - AI Video Generation Platform | Professional AI Video Creation"
        description="VEO3 is the leading AI video generation platform offering professional video creation tools. Create high-quality video content instantly with advanced AI technology for various applications."
        canonical="/home-en"
        language="en-US"
        keywords="AI video generation,video AI tool,automated video creation,VEO3,artificial intelligence video,professional video maker"
        ogTitle="VEO3 - Leading AI Video Generation Platform"
        ogDescription="Create stunning videos with AI technology. VEO3 offers professional video generation tools for modern creators and enterprises."
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
            color: '#1976d2',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              bgcolor: 'white',
            },
          }}
        >
          语言版本
        </Button>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip 
                  label="🚀 Now with GPT-4 Vision" 
                  sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                />
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Create Stunning Videos with AI
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 4, opacity: 0.9, fontWeight: 300 }}
                >
                  Transform your ideas into professional videos in minutes. 
                  No editing skills required.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.9)',
                      },
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: '400px',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h6" sx={{ opacity: 0.8 }}>
                    🎬 Video Preview
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10 }}>
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
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Why Choose VEO3?
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                Powered by advanced AI technology, VEO3 delivers professional-grade 
                video creation tools for modern businesses.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
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
          py: 10,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 700, mb: 3 }}
              >
                Ready to Get Started?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join thousands of creators and businesses using VEO3 to 
                revolutionize their video content.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  Start Your Free Trial
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
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  View Pricing
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage_EN; 