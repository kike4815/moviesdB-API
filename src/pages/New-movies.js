import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { API, URL_API } from '../utils/constants'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import MovieCatalog from '../components/MovieCatalog'

export default function NewMovies () {
    const [ listMovies, setListMovies ] = useState([])
    const [ page, setPage ] = useState(1)

    useEffect(
        () => {
            ;(async () => {
                const response = await fetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES=${page}`)
                const movies = await response.json()
                setListMovies(movies)
            })()
        },
        [ page ]
    )

    console.log(listMovies)
    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center', marginTop: 20 }}>
                <h1 style={{ fontSize: 25, fontWeight: 'bold', fontStyle: 'italic' }}>Novedades</h1>
            </Col>
            <Col span={24}>
                {listMovies.results ? (
                    <Col span={24}>
                        <MovieCatalog listMovies={listMovies} />
                    </Col>
                ) : (
                    <Loading />
                )}
            </Col>
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    )
}
