
import { Fab, makeStyles } from '@material-ui/core'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
const useStyles = makeStyles({
  floatBtn: {
    position: 'fixed',
    right: '3rem',
    bottom: '3rem'
  }
})

const ToggleThemeBtn = () => {
  const classes = useStyles()

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <Fab
      color="primary"
      variant="extended"
      className={classes.floatBtn}
      onClick={toggleTheme.bind(
        this,
        theme === "primary" ? "secondary" : "primary"
      )}
    >
      Toggle Theme
    </Fab>
  );
}

export default ToggleThemeBtn