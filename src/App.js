import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import Movie from './pages/MovieDetail/Movie';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' index element={<Movie/>}></Route>
          <Route path='movies/:type' index element={<MovieList/>}></Route>
          <Route path='/*' index element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
