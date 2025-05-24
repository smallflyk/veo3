import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3366FF',
      light: '#6690FF',
      dark: '#0040CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF7D1A',
      light: '#FFA45E',
      dark: '#C65600',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#4A4A68',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #3366FF 0%, #5E8EFF 100%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #2952CC 0%, #4B71CC 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #FF7D1A 0%, #FFA45E 100%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #E66600 0%, #E68A40 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme; 