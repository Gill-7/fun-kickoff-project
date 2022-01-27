import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  leftColumn: {
    marginTop: '0.8rem',
    color: 'green',
    fontWeight: 'bold',
  },
  rightColumn: {
    marginTop: '0.8rem',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '75vh',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },
}));

export default useStyles;
