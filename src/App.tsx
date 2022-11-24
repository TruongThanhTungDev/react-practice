import Navbar from './components/Navbar'
import './App.css';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import Movies from './components/Movies';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <Movies />
              <ToggleThemeBtn />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
