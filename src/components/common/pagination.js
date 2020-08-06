import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function Pagination(props) {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    let pages = _.range(1, pagesCount + 1);
    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pages.map(i =>
                        <li style={{ cursor: 'pointer' }} key={i} className={i === currentPage ? "page-item active" : "page-item"}>
                            <a onClick={() => onPageChange(i)} className="page-link">{i}</a>
                        </li>)}
                </ul>
            </nav>
        </div>
    )

}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}
