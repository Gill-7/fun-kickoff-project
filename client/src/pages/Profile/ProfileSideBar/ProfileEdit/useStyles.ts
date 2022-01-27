import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  heading: {
    textAlign: 'center',
    padding: '2rem 2rem 0.5rem 2rem',
  },
  boxWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    margin: '1.2rem 1rem 0.8rem 0',
  },
  boxDescribeWrapper: {
    display: 'flex',
    justifyContent: 'right',
    margin: '1.2rem 1rem 0.8rem 0',
  },
  inputLabelText: {
    marginRight: '1.2rem',
    textTransform: 'uppercase',
  },
  inputField: {
    maxWidth: '75%',
    textAlign: 'right',
  },
  textArea: {
    border: '1.2px solid 	#BEBEBE',
    width: '100%',
    padding: '10px',
    fontSize: '0.9rem',
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    borderRadius: '7px',
    '&:hover': {
      border: '1.2px solid #000000',
    },
    '&:focus': {
      border: '2px solid #0096FF',
    },
  },
}));
export default useStyles;
