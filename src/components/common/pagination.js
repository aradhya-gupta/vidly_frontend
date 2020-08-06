import React from 'react'
import PropTypes from 'prop-types';

export default function Pagination(props) {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);
    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pages.length >= 2 &&
                        (pages.map(i =>
                            <li style={{ cursor: 'pointer' }} key={i} className={i === currentPage ? "page-item active" : "page-item"}>
                                <a onClick={() => onPageChange(i)} className="page-link">{i}</a>
                            </li>))}
                </ul>
            </nav>
        </div>
    )

}
Pagination.propTypes ={
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired 
}
