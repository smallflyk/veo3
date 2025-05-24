import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink,
  TextField,
  Button,
  IconButton,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              VEO3
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              用AI重新定义视频创作，让每个人都能轻松创建高质量视频内容。
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              快速链接
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { title: '首页', path: '/' },
                { title: '功能', path: '/features' },
                { title: '定价', path: '/pricing' },
                { title: '案例', path: '/case-studies' },
              ].map((item) => (
                <MuiLink
                  key={item.title}
                  component={Link}
                  to={item.path}
                  color="text.secondary"
                  sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  {item.title}
                </MuiLink>
              ))}
            </Box>
          </Grid>
          
          {/* Support */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              支持
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { title: '帮助中心', path: '/support' },
                { title: '常见问题', path: '/faq' },
                { title: '联系我们', path: '/contact' },
                { title: '使用条款', path: '/terms' },
                { title: '隐私政策', path: '/privacy' },
              ].map((item) => (
                <MuiLink
                  key={item.title}
                  component={Link}
                  to={item.path}
                  color="text.secondary"
                  sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  {item.title}
                </MuiLink>
              ))}
            </Box>
          </Grid>
          
          {/* Newsletter */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              订阅通讯
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              订阅我们的通讯，获取最新产品更新和行业资讯。
            </Typography>
            <Box component="form" noValidate sx={{ display: 'flex' }}>
              <TextField
                size="small"
                label="电子邮箱"
                variant="outlined"
                fullWidth
                sx={{ mr: 1 }}
              />
              <Button variant="contained" color="primary">
                订阅
              </Button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        {/* Copyright */}
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' VEO3. 保留所有权利。'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 