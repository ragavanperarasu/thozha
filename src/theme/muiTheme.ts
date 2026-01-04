import { createTheme } from '@mui/material/styles';

// Thozha Purple Theme with Comfortaa font
const thozhaTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#AC74EC',
      light: '#C99EF5',
      dark: '#8A5BC0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F5F0FA',
      light: '#FAF7FC',
      dark: '#E8DEF2',
      contrastText: '#1A1A2E',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#6B6B80',
    },
    error: {
      main: '#E53935',
    },
    success: {
      main: '#43A047',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    accent: {
      main: '#AC74EC',
      light: '#C99EF5',
      dark: '#8A5BC0',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: '"Comfortaa", cursive, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(172, 116, 236, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8A5BC0 0%, #AC74EC 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(172, 116, 236, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'primary.main',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default thozhaTheme;
