import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

export default class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: "Genre" },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' }
    ]


    render() {
        const { count, showMovies, onLike, onDelete, onSort, sortColumn } = this.props;
        return (
            <React.Fragment>
                <h3>Showing {count} movies in the database</h3>
                <table className='table'>
                    <TableHeader
                        columns={this.columns}
                        sortColumn={sortColumn}
                        onSort={onSort} />
                    <TableBody
                        columns={this.columns}
                        data={showMovies} />
                    <tbody>
                        {showMovies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><i className={movie.liked ? 'fa fa-heart' : 'fa fa-heart-o'} onClick={() => onLike(movie)}></i></td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => onDelete(movie)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}
