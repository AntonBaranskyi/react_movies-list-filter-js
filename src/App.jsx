
import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, filterField) {
  const copyMovies = [...movies];
  const lowerFilter = filterField.toLowerCase().trim();

  if (filterField) {
    return copyMovies.filter(
      movie => movie.title.toLowerCase().trim().includes(lowerFilter)
        || movie.description.toLowerCase().trim().includes(lowerFilter),
    );
  }

  return copyMovies;
}

export const App = () => {
  const [searchField, setSearchField] = useState('');

  const visibleMovies = filterMovies(moviesFromServer, searchField);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setSearchField(e.target.value)}
                value={searchField}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
