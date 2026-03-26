import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9E9E9E', // Helleres Grau
      light: '#BDBDBD',
      dark: '#757575',
      contrastText: '#fff',
    },
    secondary: {
      main: '#424242', // Dunkleres Grau
      light: '#616161',
      dark: '#212121',
      contrastText: '#fff',
    },
    background: {
      default: '#FAFAFA',
      paper: '#fff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
  },
});

