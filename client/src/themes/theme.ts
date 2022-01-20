import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", "asans-serif"',
    // fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
