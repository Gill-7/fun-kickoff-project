import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 20,
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '600',
    borderRadius: 8,
    margin: 'auto',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: '3rem',
    paddingTop: '2rem',
    color: '#000000',
    textAlign: 'center',
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1.5rem',
  },
}));

export default useStyles;
