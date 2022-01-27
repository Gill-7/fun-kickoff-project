import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={12} elevation={6} component={Paper}>
        <Box className={classes.authWrapper} display="flex" alignItems="flex-start" flexDirection="column">
          <AuthHeader linkTo="/login" asideText="Already have an account?" btnText="Login" />
          <Box
            minWidth="300px"
            alignSelf="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.formContainer}
          >
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} variant="h4">
                  Sign up
                </Typography>
              </Grid>
            </Grid>
            <SignUpForm handleSubmit={handleSubmit} />
            <Box p={1} alignSelf="center" display="flex" flexDirection="row" mb="2.0rem" mt="2.5rem">
              <Typography className={classes.userLoginText} variant="subtitle2">
                Already a member?
              </Typography>
              <Link to="/login" className={classes.userLoginBtn}>
                Login
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
