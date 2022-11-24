import { TextField, makeStyles, Button, Chip, PropTypes } from "@material-ui/core";
import { ChangeEvent, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";
const useStyles = makeStyles({
  movieInput: {
    marginRight: '5px'
  },
  positionBox: {
    display: 'flex',
    justifyContent: 'center',
    margin: '3rem 0'
  },
  listMovie: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0 5rem'
  },
  movieChip: {
    fontSize: '2rem',
    padding: '30px 10px',
    margin: '5px'
  }
});

const Movies = () => {
  const classes = useStyles()
  const [movie, setMovie] = useState('')
  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => setMovie(event.target.value)

  // context 
  const { movies, addMovie, deleteMovie } = useContext(MovieContext)
  
  const { theme } = useContext(ThemeContext)
  const chipTheme = theme as Exclude<PropTypes.Color, "inherit">; 
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </div>
      <div className={classes.listMovie}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            className={classes.movieChip}
            onDelete={deleteMovie.bind(this, movie.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Movies