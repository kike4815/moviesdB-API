import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import MovieCatalog from '../../components/MovieCatalog'
import { Input, Col, Row } from 'antd'
import Footer from '../../components/Footer'
import queryString from 'query-string'
import { URL_API, API } from '../../utils/constants'

import './Search.scss'

function Search (props) {
    const { location, history } = props
    const [ movieList, setMovieList ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')

    useEffect(
        () => {
            ;(async () => {
                const valuesearch = queryString.parseUrl(location.search)
                const { query: { s } } = valuesearch
                if (s) {
                    const response = await fetch(
                        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
                    )
                    const movies = await response.json()
                    setSearchValue(s)
                    setMovieList(movies)
                }
            })()
        },
        [ location.search ]
    )

    const onChangeValue = (e) => {
        const urlParams = queryString.parse(location.search)
        urlParams.s = e.target.value
        history.push(`?${queryString.stringify(urlParams)}`)
        setSearchValue(e.target.value)
    }

    return (
        <Row>
            <Col span={12} offset={6} className="search">
                <h1>Busca tu pelicula</h1>
                <Input value={searchValue} onChange={onChangeValue} />
            </Col>
            {movieList.results && (
                <Row>
                    <MovieCatalog movies={movieList} />
                </Row>
            )}
            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    )
}
export default withRouter(Search)
