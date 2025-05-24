import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Container,
  Menu,
  MenuItem,
  Avatar,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  
  // 模拟用户登录状态
  const isLoggedIn = true; // 在实际应用中，这应该来自认证状态
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // 处理登出逻辑
    handleCloseUserMenu();
    navigate('/');
  };

  const menuItems = [
    { title: '首页', path: '/' },
    { title: '功能', path: '/features' },
    { title: '定价', path: '/pricing' },
    { title: '案例', path: '/case-studies' },
    { title: '支持', path: '/support' },
  ];

  const userMenuItems = [
    { title: '仪表板', path: '/dashboard', icon: <DashboardIcon /> },
    { title: '账户设置', path: '/settings', icon: <SettingsIcon /> },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            VEO3
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.title} 
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={item.path}
                >
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            VEO3
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.title}
                component={Link}
                to={item.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'text.primary', display: 'block', mx: 1 }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Login/Register buttons or User menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* 语言切换器 */}
            <LanguageSwitcher />
            
            {isLoggedIn ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>用</Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {userMenuItems.map((item) => (
                    <MenuItem 
                      key={item.title} 
                      onClick={handleCloseUserMenu}
                      component={Link}
                      to={item.path}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {item.icon}
                        <Typography textAlign="center">{item.title}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LogoutIcon />
                      <Typography textAlign="center">退出登录</Typography>
                    </Box>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button 
                  component={Link} 
                  to="/login" 
                  color="inherit" 
                  sx={{ mr: 1 }}
                >
                  登录
                </Button>
                <Button 
                  component={Link} 
                  to="/register" 
                  variant="contained" 
                  color="primary"
                >
                  注册
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 