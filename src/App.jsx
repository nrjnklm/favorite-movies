import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import MoviesList from './components/MoviesList';
import Preferences from './components/Preferences';

function App() {
  return (
    <div className="container">
      <Header />
      <Introduction />
      <MoviesList />
      <Preferences />
    </div>
  );
}

export default App;
