import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  Link as MuiLink,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 这里应该调用实际的登录API
      // const response = await authService.login(formData);
      
      // 模拟登录
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 登录成功后跳转到仪表板
      navigate('/dashboard');
    } catch (err) {
      setError('登录失败，请检查您的邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // 实现Google登录
    console.log('Google登录');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #3366FF, #FF7D1A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              欢迎回到VEO3
            </Typography>
            <Typography variant="h6" color="text.secondary">
              登录您的账户，开始AI视频创作之旅
            </Typography>
          </Box>

          <Card sx={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
            <CardContent sx={{ p: 4 }}>
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="邮箱地址"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="密码"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <MuiLink component={Link} to="/forgot-password" variant="body2">
                    忘记密码？
                  </MuiLink>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ mb: 3, py: 1.5 }}
                >
                  {loading ? '登录中...' : '登录'}
                </Button>

                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    或者
                  </Typography>
                </Divider>

                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  onClick={handleGoogleLogin}
                  sx={{ mb: 3, py: 1.5 }}
                  startIcon={<GoogleIcon />}
                >
                  使用Google登录
                </Button>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    还没有账户？{' '}
                    <MuiLink component={Link} to="/register">
                      立即注册
                    </MuiLink>
                  </Typography>
                </Box>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LoginPage; 