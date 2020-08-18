import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MenuHeader from './components/MenuHeader'

//IMPORT PAGES

import Home from './pages/Home'
import Movie from './pages/movie'
import Error404 from './pages/Error404'
import Popular from './pages/Popular'
import Search from './pages/Search'
import NewMovies from './pages/New-movies'

function App () {
    const { Header, Content } = Layout

    return (
        <Layout>
            <Router>
                <Header>
                    <MenuHeader />
                </Header>
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
