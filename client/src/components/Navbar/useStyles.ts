import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    boxShadow:
      '- 1px 9px 15px - 1px rgba(0, 0, 0, 0.2), 0px 10px 15px - 3px rgba(0, 0, 0, 0.1), 0px 10px 15px - 3px rgba(0, 0, 0, 0.1)',
    height: '4.2rem',
  },
  logoImg: {
    height: '2rem',
    marginTop: '5px',
    width: '11rem',
  },
  profileName: {
    textAlign: 'right',
    color: 'black',
  },
  logoutName: {
    textAlign: 'center',
    color: 'black',
  },
}));

export default useStyles;
