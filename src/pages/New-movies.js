import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { API, URL_API } from '../utils/constants'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import MovieCatalog from '../components/MovieCatalog'
import Pagination from '../components/Pagination'

export default function NewMovies () {
    const [ movies, setMovies ] = useState([])
    const [ page, setPage ] = useState(1)

    useEffect(
        () => {
            (async () => {
                const response = await fetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=${page}`)
                const movies = await response.json()
                setMovies(movies)
            })();
        },
        [ page ]
    )

    const onChangePage = (page) => {
        setPage(page)
    }

    return (
        <Row>
            <Col span={24} style={{ textAlign: 'center', marginTop: 20 }}>
                <h1 style={{ fontSize: 25, fontWeight: 'bold', fontStyle: 'italic' }}>Novedades</h1>
            </Col>

            {movies.results ? (
                <Col span="24">
                    <Row>
                        <MovieCatalog movies={movies} />
                        <Col span={24}>
                            <Pagination
                                currentPage={movies.page}
                                totalItems={movies.total_results}
                                onChangePage={onChangePage}
                            />
                        </Col>
                    </Row>
                </Col>
            ) : (
                <Col span={24}>
                    <Loading />
                </Col>
            )}

            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    )
}
