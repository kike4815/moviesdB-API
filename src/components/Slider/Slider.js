import React from 'react'
import { Carousel, Button } from 'antd'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

import './Slider.scss'

export default function Slider (props) {
    const { movies } = props

    if (movies.loading || !movies.result) {
        return <Loading />
    }

    const { results } = movies.result
    return (
        <Carousel autoplay className="slider-movies">
            {results.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </Carousel>
    )
}

function Movie (props) {
    const { movie: { id, backdrop_path, title, overview } } = props
    const backDrop = `https://image.tmdb.org/t/p/original${backdrop_path}`
    const titleUp = title.toUpperCase()

    return (
        <div className="slider-movies__movie" style={{ backgroundImage: `url('${backDrop}')` }}>
            <div className="slider-movies__movie-info">
                <div>
                    <h2>{titleUp}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary" style={{ borderRadius: '10px' }}>
                            Más
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
