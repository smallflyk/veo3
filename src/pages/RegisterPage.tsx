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
  IconButton,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'agreeToTerms' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 验证密码
    if (formData.password !== formData.confirmPassword) {
      setError('两次输入的密码不一致');
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      setError('请同意用户协议和隐私政策');
      setLoading(false);
      return;
    }

    try {
      // 这里应该调用实际的注册API
      // const response = await authService.register(formData);
      
      // 模拟注册
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 注册成功后跳转到仪表板
      navigate('/dashboard');
    } catch (err) {
      setError('注册失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    // 实现Google注册
    console.log('Google注册');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                color: 'white',
              }}
            >
              加入VEO3
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              创建您的账户，开启AI视频创作之旅
            </Typography>
          </Box>

          <Card sx={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
            <CardContent sx={{ p: 4 }}>
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="姓名"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />

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

                <TextField
                  fullWidth
                  label="确认密码"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
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
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body2">
                      我同意{' '}
                      <MuiLink component={Link} to="/terms">
                        用户协议
                      </MuiLink>{' '}
                      和{' '}
                      <MuiLink component={Link} to="/privacy">
                        隐私政策
                      </MuiLink>
                    </Typography>
                  }
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ mb: 3, py: 1.5 }}
                >
                  {loading ? '注册中...' : '创建账户'}
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
                  onClick={handleGoogleRegister}
                  sx={{ mb: 3, py: 1.5 }}
                  startIcon={<GoogleIcon />}
                >
                  使用Google注册
                </Button>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    已有账户？{' '}
                    <MuiLink component={Link} to="/login">
                      立即登录
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

export default RegisterPage; 