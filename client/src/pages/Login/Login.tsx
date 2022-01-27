import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
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
          <AuthHeader linkTo="/signup" asideText="Don't have an account?" btnText="Create account" />
          <Box
            minWidth={300}
            p={3}
            alignSelf="center"
            className={classes.formContainer}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container>
              <Grid item xs>
                <Typography className={classes.welcome} variant="h4">
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={handleSubmit} />
            <Box p={1} alignSelf="center" display="flex" flexDirection="row">
              <Typography className={classes.userSignupText}>Already a member?</Typography>
              <Link to="/signup" className={classes.userSignupBtn}>
                Signup
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
