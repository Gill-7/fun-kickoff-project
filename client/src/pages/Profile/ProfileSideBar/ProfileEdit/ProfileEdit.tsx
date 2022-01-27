import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import {
  Typography,
  Button,
  TextField,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from '@mui/material';
import useStyles from './useStyles';

export default function ProfileEdit(): JSX.Element {
  const classes = useStyles();

  return (
    <form>
      <Box sx={{ width: '100%' }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.heading} style={{ fontWeight: 900, fontSize: '1.6rem' }} variant="h6">
              Edit Profile
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 700 }} className={classes.inputLabelText}>
              First Name
            </InputLabel>
          </Grid>
          <Grid item xs={8.5} className={classes.inputField}>
            <TextField id="first-name" fullWidth label="First Name" variant="outlined" autoFocus />
          </Grid>
          <Grid item xs={0.3} />
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Last Name
            </InputLabel>
          </Grid>
          <Grid item xs={8} className={classes.inputField}>
            <TextField id="last-name" fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={0.8} />
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Gender
            </InputLabel>
          </Grid>
          <Grid item xs={3} className={classes.inputField}>
            <FormControl fullWidth>
              <InputLabel id="gender">Gender</InputLabel>
              <Select labelId="gender" id="gender" label="Gender">
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5.8} />
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Birth Date
            </InputLabel>
          </Grid>
          <Grid item xs={3} className={classes.inputField}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <TextField id="date" type="date" defaultValue="2022-01-24" sx={{ width: 220 }} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={5.8} />
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Email Address
            </InputLabel>
          </Grid>
          <Grid item xs={8} className={classes.inputField}>
            <TextField id="email-address" fullWidth label="user@gmail.com" variant="outlined" />
          </Grid>
          <Grid item xs={0.8} />
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Phone Number
            </InputLabel>
          </Grid>
          <Grid item xs={4}>
            <Typography style={{ fontStyle: 'italic', fontSize: '0.75rem' }}>No phone number entered</Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: 'right' }}>
            <Button
              variant="outlined"
              style={{ color: '#f14140', border: '2px solid #f14140', fontWeight: 900, fontSize: '0.75rem' }}
            >
              Add a phone number
            </Button>
          </Grid>
          <Grid item xs={0.8} />
        </Grid>

        <Grid container className={classes.boxWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Where you live
            </InputLabel>
          </Grid>
          <Grid item xs={8} className={classes.inputField}>
            <TextField id="address" fullWidth label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={0.8} />
        </Grid>

        <Grid container className={classes.boxDescribeWrapper}>
          <Grid item xs={3.2} style={{ textAlign: 'right' }}>
            <InputLabel sx={{ fontSize: 12, fontWeight: 900 }} className={classes.inputLabelText}>
              Describe Yourself
            </InputLabel>
          </Grid>
          <Grid item xs={8} className={classes.inputField}>
            <TextareaAutosize
              id="about"
              aria-label="empty textarea"
              placeholder="About you"
              minRows={6}
              className={classes.textArea}
            />
          </Grid>
          <Grid item xs={0.8} />
        </Grid>

        <Grid container>
          <Grid item xs={12} style={{ textAlign: 'center', margin: '1rem 0 3.5rem 0' }}>
            <Button
              variant="contained"
              style={{
                color: 'white',
                backgroundColor: '#f14140',
                border: '2px solid #f14140',
                fontWeight: 900,
                fontSize: '0.82rem',
                padding: '0.7rem 3.6rem',
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
