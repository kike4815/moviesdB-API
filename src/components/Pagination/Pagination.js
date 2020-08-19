import React from 'react'
import Pagination from 'rc-pagination'

import './Pagination.scss'

export default function PaginationMovies (props) {
    const { currentPage, totalItems, onChangePage } = props
    console.log(props);
    return (
        <Pagination
            className="pagination"
            current={currentPage}
            total={totalItems}
            onChange={onChangePage}
            pageSize={20}
        />
    )
}
