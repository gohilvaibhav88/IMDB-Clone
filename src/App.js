
import './App.css';
import {
  BrowserRouter as Router , Routes , Route , Link 
}from 'react-router-dom';
import  Header from "./component/Header/header";
import Home from "./pages/Home/home.js"
import MovieList from "./component/MovieList/movieList"
import Movie from './pages/Home/movieDetail/movie.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
