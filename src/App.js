import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//IMPORT PAGES

import Home from './pages/home'
import Movie from './pages/movie'
import Error404 from './pages/error404'
import Popular from './pages/popular'
import Search from './pages/search'
import NewMovies from './pages/new-movies'

function App () {
    const { Header, Content } = Layout

    return (
        <Layout>
            <Router>
                <Header>headerr..........</Header>
                <Content>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                        <Route path="/movie/:id" exact={true}>
                            <Movie />
                        </Route>
                        <Route path="/popular" exact={true}>
                            <Popular />
                        </Route>
                        <Route path="/new-movies" exact={true}>
                            <NewMovies />
                        </Route>
                        <Route path="/search" exact={true}>
                            <Search />
                        </Route>
                        <Route path="*" exact={true}>
                            <Error404 />
                        </Route>
                    </Switch>
                </Content>
            </Router>
        </Layout>
    )
}

export default App
