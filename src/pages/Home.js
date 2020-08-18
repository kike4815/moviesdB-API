import React from 'react'
import useFetch from '../Hooks/useFetch'
import Slider from '../components/Slider'
import {API,URL_API} from '../utils/constants'
import MovieList from '../components/MovieList'
import {Col,Row} from 'antd'
import Footer from '../components/Footer'

export default function Home () {
  
    const movies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`)
    const popular = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`)
    const mostRated = useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`)

    return (
        <>
        <Slider movies={movies}/>
        <Row>
            <Col span={12}>
            <MovieList title='Peliculas Populares' movies={popular} />
            </Col>
            <Col span={12}>
            <MovieList title='Top Valoradas' movies={mostRated} />
            </Col>
        </Row>
        <Footer />
        </>
    )
}
