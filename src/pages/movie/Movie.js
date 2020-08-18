import React from 'react'
import { Col, Row, Button } from 'antd'
import Loading from '../../components/Loading'
import { URL_API, API } from '../../utils/constants'
import useFetch from '../../Hooks/useFetch'
import moment from 'moment'
import { useParams } from 'react-router-dom'

import './Movie.scss'

export default function Movie () {
    const { id } = useParams()

    const movie = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=es-ES`)
    console.log(movie)

    if (movie.loading || !movie.result) {
        return <Loading />
    }

    return <RenderMovie movie={movie.result} />
}

function RenderMovie (props) {
    const { movie: { backdrop_path, poster_path } } = props
    const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`

    return (
        <div className="movie" style={{ backgroundImage: `url('${backdropPath}')` }}>
            {/* OPCION PARA OPACIDAD 1*/}
            {/* <div className="movie__dark" /> */}
            <Row>
                <Col span={8} offset={3} className="movie__poster">
                    <RenderPoster image={poster_path} />
                </Col>
                <Col span={10} className="movie__info">
                    <MoreInfo overview={props.movie} />
                </Col>
            </Row>
        </div>
    )
}

function RenderPoster (props) {
    const { image } = props
    const posterPath = `https://image.tmdb.org/t/p/original/${image}`

    return <div style={{ backgroundImage: `url('${posterPath}')` }} />
}

function MoreInfo (props) {
    const { overview: { id, title, overview, genres, release_date } } = props

    return (
        <>
        <div className="movie__info-header">
            <h1>
                {title}
                <span>{moment(release_date, 'YYYY-MM-DD').format('YYYY')}</span>
            </h1>
            <button>
                Ver Trailer
            </button>
        </div>
        <div className='movie__info-content'>
        <h3>General</h3>
        <p>{overview}</p>

        <h3>Generos</h3>
        <ul>
        {genres.map(genres => (
            <li key={genres.id}>{genres.name}</li>
        ))}
        </ul>
        </div>
        </>
    )
}
