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
    paddingTop: 20,
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
    fontSize: 24,
    fontWeight: theme.typography.button.fontWeight,
    paddingBottom: '2rem',
    paddingTop: '4rem',
    color: '#000000',
    textAlign: 'center',
  },
  userLoginText: {
    fontWeight: theme.typography.button.fontWeight,
    fontSize: 13,
  },
  userLoginBtn: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: 13,
  },
}));

export default useStyles;
