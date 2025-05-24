import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

interface Language {
  code: string;
  name: string;
  flag: string;
  route: string;
  description: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    route: '/home-en',
    description: 'Modern & Professional'
  },
  {
    code: 'jp',
    name: '日本語',
    flag: '🇯🇵',
    route: '/home-jp',
    description: '精致细腻'
  },
  {
    code: 'kr',
    name: '한국어',
    flag: '🇰🇷',
    route: '/home-kr',
    description: '时尚潮流'
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪',
    route: '/home-de',
    description: 'Präzision & Qualität'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    route: '/home-fr',
    description: 'Élégance & Art'
  },
  {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳',
    route: '/',
    description: '原版首页'
  }
];

const LanguageSwitcher: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentLanguage = () => {
    const currentPath = location.pathname;
    return languages.find(lang => lang.route === currentPath) || languages[5]; // 默认中文
  };

  const currentLang = getCurrentLanguage();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: Language) => {
    navigate(language.route);
    handleClose();
  };

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        sx={{
          bgcolor: 'transparent',
          color: 'text.primary',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          display: 'flex',
          gap: 0.5,
          px: 1.5,
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.04)',
            borderColor: 'primary.main',
          },
        }}
      >
        <Typography sx={{ fontSize: '1.2rem' }}>{currentLang.flag}</Typography>
        <LanguageIcon sx={{ fontSize: '1rem' }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 8,
          sx: {
            mt: 1,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            minWidth: 280,
            overflow: 'visible',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'rgba(255, 255, 255, 0.95)',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
            选择语言版本 / Choose Language
          </Typography>
        </Box>

        {languages.map((language, index) => (
          <motion.div
            key={language.code}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <MenuItem
              onClick={() => handleLanguageSelect(language)}
              selected={language.code === currentLang.code}
              sx={{
                mx: 1,
                mb: 0.5,
                borderRadius: 2,
                '&.Mui-selected': {
                  bgcolor: 'rgba(25, 118, 210, 0.08)',
                  '&:hover': {
                    bgcolor: 'rgba(25, 118, 210, 0.12)',
                  },
                },
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Typography variant="h6" sx={{ fontSize: '1.5rem' }}>
                  {language.flag}
                </Typography>
              </ListItemIcon>
              <ListItemText>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {language.name}
                  </Typography>
                  {language.code === currentLang.code && (
                    <Chip
                      label="当前"
                      size="small"
                      sx={{
                        height: 20,
                        fontSize: '0.7rem',
                        bgcolor: 'primary.main',
                        color: 'white',
                      }}
                    />
                  )}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {language.description}
                </Typography>
              </ListItemText>
            </MenuItem>
          </motion.div>
        ))}

        <Box sx={{ p: 2, pt: 1, borderTop: '1px solid rgba(0, 0, 0, 0.06)', mt: 1 }}>
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block' }}>
            每个版本都有独特的设计风格 ✨
          </Typography>
        </Box>
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher; 