import { AppBar, Box, Button, Chip, FormControl, makeStyles, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import { ChangeEvent, useEffect, useState, useContext } from "react";
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import WelcomeMessage from './WelcomeMessage'


const useStyles = makeStyles({
  flexHeader: {
    display: "flex",
    justifyContent: "space-between",
    width: '100%',
    alignItems: 'center'
  },
  positionSelect: {
    color: 'white!important',
    borderBottom: '1px solid white'
  }
});

const Navbar = () => {
  // state
  const classes = useStyles()
  const [position, setPosition] = useState<string>('Full-stack Developer')
  const onPositionChange = (event: ChangeEvent<{
    value: unknown;
  }>) => setPosition(event.target.value as string)

  const [time, setTime] = useState<Date>(() => new Date(Date.now()))
  // effect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])

  // context
  const { lastTime, status } = useContext(ProgressContext)
  const {theme} = useContext(ThemeContext)
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <div className={classes.flexHeader}>
          <Typography variant="h6">My movie</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end Developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
              <Button variant="contained">Login</Button>
            </Box>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar