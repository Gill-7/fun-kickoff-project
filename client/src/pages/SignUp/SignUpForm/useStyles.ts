import { makeStyles } from '@mui/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  label: {
    fontSize: 19,
    color: 'rgb(0,0,0,0.4)',
    paddingLeft: '5px',
  },
  inputs: {
    marginTop: '1rem',
    height: '2rem',
    padding: '5px',
    width: '100%',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

export default useStyles;
