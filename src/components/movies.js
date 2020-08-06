import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchBox'
import _ from 'lodash';

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: 'all',
    genres: [],
    sortColumn: { path: 'title', order: 'asc' },
    searchQuery: '',
  }
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  }
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });

  }

  handlePageChange = (curpage) => {
    this.setState({ currentPage: curpage });
  }

  handleGenreSelect = (genre) => {
    this.setState({ currentGenre: genre, searchQuery: "", currentPage: 1 });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: 'all', currentPage: 1 });
  }
  render() {
    const {
      pageSize,
      currentPage,
      currentGenre,
      sortColumn,
      searchQuery,
      movies
    } = this.state;
    let showMovies, count;
    //showMovies contains movies with genre as currentGenre
    if (searchQuery)
      showMovies = movies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    else {
      showMovies = movies.filter(m => m.genre.name === currentGenre || currentGenre === 'all');
    }
    count = showMovies.length;

    //if no movies in database then show message
    //if no movies in present genre then show all movies
    if (count === 0) {
      if (currentGenre !== 'all')
        this.handleGenreSelect('all');
      else
        return <h5>There are no movies in the database.</h5>;
    }

    if (sortColumn.order === 'asc')
      showMovies = _.sortBy(showMovies, [sortColumn.path])
    else
      showMovies = _.sortBy(showMovies, [sortColumn.path]).reverse();

    // logic for pagination
    const begin = (currentPage - 1) * pageSize;
    const end = begin + pageSize - 1 < count ? begin + pageSize - 1 : count - 1;
    showMovies = showMovies.filter((value, index) => index >= begin && index <= end);

    return (
      <div className='row'>
        <div className="col-3">
          <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} selectedGenre={this.state.currentGenre} />
        </div>
        <div className='col'>
          <Link to="/movies/new" className="btn btn-primary">
            New Movie
          </Link>
          <h6>Showing {count} movies in the database</h6>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            sortColumn={sortColumn}
            count={count}
            showMovies={showMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>

      </div>
    );
  }
}
