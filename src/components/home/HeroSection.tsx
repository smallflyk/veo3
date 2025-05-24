import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 16 },
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(51, 102, 255, 0.1) 0%, rgba(51, 102, 255, 0) 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 125, 26, 0.1) 0%, rgba(255, 125, 26, 0) 70%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(45deg, #3366FF, #FF7D1A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                用AI重新定义视频创作
              </Typography>
              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: '90%' }}
              >
                让每个人都能轻松创建高质量视频内容，无需专业技能和昂贵设备。
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  免费试用
                </Button>
                <Button
                  component={Link}
                  to="/features"
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  了解更多
                </Button>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mt: 4,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  maxWidth: 'fit-content'
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  已有超过 <Typography component="span" color="primary" fontWeight="bold">10,000+</Typography> 创作者使用我们的平台
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '500px' },
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                {/* 这里可以放置视频或动态演示 */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color="white" variant="h6">
                    AI视频生成演示
                  </Typography>
                  {/* 实际项目中这里应该嵌入视频 */}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 