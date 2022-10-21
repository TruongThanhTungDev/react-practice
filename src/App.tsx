import Navbar from './components/Navbar'
import './App.css';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import Movies from './components/Movies';

function App() {
  return (
    <div>
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies/>
            <ToggleThemeBtn/>
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
