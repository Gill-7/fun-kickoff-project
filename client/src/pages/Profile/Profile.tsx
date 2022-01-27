import { Navbar } from '../../components/Navbar/Navbar';
import { Grid, Box, ListItem } from '@mui/material';
import useStyles from './useStyles';
import { Link, Route } from 'react-router-dom';
import ProfileEdit from './ProfileSideBar/ProfileEdit/ProfileEdit';
import ProfileGallery from './ProfileSideBar/ProfileGallery';
import ProfilePayment from './ProfileSideBar/ProfilePayment';
import ProfileAvailability from './ProfileSideBar/ProfileAvailability';
import ProfileSecurity from './ProfileSideBar/ProfileSecurity';
import ProfileSettings from './ProfileSideBar/ProfileSettings';

export default function Profile(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box sx={{ width: '100%', p: 3 }} style={{ backgroundColor: '#f5f5f5', marginTop: '4px' }}>
        <Grid container columnSpacing={{ xs: 2 }} style={{ marginTop: '1rem' }}>
          <Grid item xs={0.5} sm={1.0} md={1.4} lg={2.0} xl={2.2} />
          <Grid
            item
            xs={1.5}
            sm={1.4}
            md={1.3}
            lg={1.0}
            xl={1.0}
            className={classes.leftColumn}
            style={{ marginTop: '1rem' }}
          >
            <ListItem
              component={Link}
              to="/user/edit-profile"
              style={{ margin: '1rem 0 1rem 0', padding: 0, color: 'black' }}
            >
              Edit profile
            </ListItem>
            <ListItem
              component={Link}
              to="/user/gallery-profile"
              style={{ margin: '1rem 0 1rem 0', padding: 0, color: 'black' }}
            >
              Profile Photo
            </ListItem>
            <ListItem
              component={Link}
              to="/user/availability-profile"
              style={{ margin: '1rem 0 1rem 0', padding: 0, color: 'black' }}
            >
              Availability
            </ListItem>
            <ListItem
              component={Link}
              to="/user/payment-profile"
              style={{ margin: '1rem 0 1rem 0', padding: 0, color: 'black' }}
            >
              Payment
            </ListItem>
            <ListItem
              component={Link}
              to="/user/security-profile"
              style={{ margin: '1rem 0 1rem 0', padding: 0, color: 'black' }}
            >
              Security
            </ListItem>
            <ListItem
              component={Link}
              to="/user/settings-profile"
              style={{ margin: '1rem 0 1rem 0', padding: 0, color: 'black' }}
            >
              Settings
            </ListItem>
          </Grid>
          <Grid item xs={1.0} sm={0.5} md={0.8} lg={0.7} xl={0.5} />
          <Grid item xs={8} sm={9} md={8} lg={5.5} xl={5.5} className={classes.rightColumn}>
            <Route path={`/user/edit-profile`} component={ProfileEdit} />
            <Route path={`/user/gallery-profile`} component={ProfileGallery} />
            <Route path={`/user/payment-profile`} component={ProfilePayment} />
            <Route path={`/user/availability-profile`} component={ProfileAvailability} />
            <Route path={`/user/security-profile`} component={ProfileSecurity} />
            <Route path={`/user/settings-profile`} component={ProfileSettings} />
          </Grid>
          <Grid item xs={1.0} sm={0.6} md={0.4} lg={0.5} xl={0.5} />
        </Grid>
      </Box>
    </>
  );
}
