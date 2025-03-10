import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
// import NotFoundPage from 'pages/common/NotFound/NotFoundPage';

const Cast = React.lazy(() => import('./components/MovieDetails/Cast'));
const Reviews = React.lazy(() => import('./components/MovieDetails/Reviews'));
const NotFoundPage = React.lazy(() => import('./pages/common/NotFound/NotFoundPage'))

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
