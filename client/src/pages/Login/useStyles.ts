import { makeStyles } from '@mui/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    height: '100%',
    maxHeight: '600',
    borderRadius: 8,
    margin: 'auto',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 32,
    paddingBottom: '3rem',
    paddingTop: '2rem',
    color: '#000000',
    textAlign: 'center',
    fontWeight: theme.typography.button.fontWeight,
  },
  userSignupText: {
    fontWeight: 700,
    fontSize: 14,
  },
  userSignupBtn: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 14,
  },
}));

export default useStyles;
