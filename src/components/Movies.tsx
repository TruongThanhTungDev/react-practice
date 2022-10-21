import { Box, TextField, makeStyles, Button } from "@material-ui/core";
import {ChangeEvent, useState} from 'react'
const useStyles = makeStyles({
  movieInput: {
    marginRight: '5px'
  },
  positionBox: {
    display: 'flex',
    justifyContent: 'center',
    margin: '3rem 0'
  }
});

const Movies = () => {
  const classes = useStyles()

  const [movie, setMovie] = useState('')
  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => setMovie(event.target.value)
  return (
    <>
      <div className={classes.positionBox}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={onMovieInputChange}
          value={movie}
        />
        <Button variant="contained" color="primary">
          Add
        </Button>
      </div>
    </>
  );
}

export default Movies