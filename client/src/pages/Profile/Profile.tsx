import { Navbar } from '../../components/Navbar/Navbar';
import { Grid, Box, ListItem } from '@mui/material';
import useStyles from './useStyles';
import { Link, Route } from 'react-router-dom';
import ProfileEdit from './ProfileSideBar/ProfileEdit';
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
        <Grid container columnSpacing={{ xs: 2 }} style={{ marginTop: '2rem' }}>
          <Grid item xs={0.5} sm={2.0} md={2.0} lg={2.0} xl={2.85} />
          <Grid
            item
            xs={1.5}
            sm={1.0}
            md={1.0}
            lg={1.0}
            xl={0.65}
            className={classes.leftColumn}
            style={{ marginTop: '1rem' }}
          >
            <ListItem component={Link} to="/user/edit-profile" style={{ margin: '1rem 0 1rem 0', padding: 0 }}>
              Edit profile
            </ListItem>
            <ListItem component={Link} to="/user/gallery-profile" style={{ margin: '1rem 0 1rem 0', padding: 0 }}>
              Profile Photo
            </ListItem>
            <ListItem component={Link} to="/user/availability-profile" style={{ margin: '1rem 0 1rem 0', padding: 0 }}>
              Availability
            </ListItem>
            <ListItem component={Link} to="/user/payment-profile" style={{ margin: '1rem 0 1rem 0', padding: 0 }}>
              Payment
            </ListItem>
            <ListItem component={Link} to="/user/security-profile" style={{ margin: '1rem 0 1rem 0', padding: 0 }}>
              Security
            </ListItem>
            <ListItem component={Link} to="/user/settings-profile" style={{ margin: '1rem 0 1rem 0', padding: 0 }}>
              Settings
            </ListItem>
          </Grid>
          <Grid item xs={1.0} sm={1.0} md={1.25} lg={0.75} xl={0.5} />
          <Grid item xs={8} sm={7} md={6.0} lg={5.0} xl={4.5} className={classes.rightColumn}>
            <Route path={`/user/edit-profile`} component={ProfileEdit} />
            <Route path={`/user/gallery-profile`} component={ProfileGallery} />
            <Route path={`/user/payment-profile`} component={ProfilePayment} />
            <Route path={`/user/availability-profile`} component={ProfileAvailability} />
            <Route path={`/user/security-profile`} component={ProfileSecurity} />
            <Route path={`/user/settings-profile`} component={ProfileSettings} />
          </Grid>
          <Grid item xs={1.0} sm={1.0} md={1.25} lg={1.0} xl={1.0} />
        </Grid>
      </Box>
    </>
  );
}
