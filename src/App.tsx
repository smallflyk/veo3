import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout components
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateVideoPage from './pages/CreateVideoPage';
import UserSettingsPage from './pages/UserSettingsPage';
import HomePage_EN from './pages/HomePage_EN';
import HomePage_JP from './pages/HomePage_JP';
import HomePage_KR from './pages/HomePage_KR';
import HomePage_DE from './pages/HomePage_DE';
import HomePage_FR from './pages/HomePage_FR';
import MultiLanguagePage from './pages/MultiLanguagePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3366FF',
    },
    secondary: {
      main: '#FF7D1A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <Routes>
        {/* 多语言首页路由 */}
        <Route path="/home-en" element={<HomePage_EN />} />
        <Route path="/home-jp" element={<HomePage_JP />} />
        <Route path="/home-kr" element={<HomePage_KR />} />
        <Route path="/home-de" element={<HomePage_DE />} />
        <Route path="/home-fr" element={<HomePage_FR />} />

        {/* 多语言展示页面 */}
        <Route path="/languages" element={<MultiLanguagePage />} />

        {/* 认证页面 - 独立布局 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* 其他页面 - 需要Layout包装 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="create-video" element={<CreateVideoPage />} />
          <Route path="settings" element={<UserSettingsPage />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
