import React from 'react'
import { Col, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'

import './MovieCatalog.scss'

export default function MovieCatalog (props) {
    const { listMovies: { results } } = props

    return results.map((movie) => (
        <Col key={movie.id} xs={4} className="movie-catalog">
            <MovieCard movie={movie} />
        </Col>
    ))
}
function MovieCard (props) {
    const { movie } = props
    console.log(movie)
    return 'Moviecard....'
}
