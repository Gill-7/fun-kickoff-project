import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 900,
    },
  },
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#000000' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
