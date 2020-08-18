import React from 'react'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

import './MenuHeader.scss'

export default function MenuHeader () {
    return (
        <div className="menu-header">
            <div className="menu-header__logo">
                <Logo />
            </div>
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={[ '1' ]} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/new-movies">Novedades</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/popular">Populares</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/search">Búsqueda</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
