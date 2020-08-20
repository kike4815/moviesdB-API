import React from 'react'
import { Link } from 'react-router-dom'

import './Error404.scss'

export default function Error404 () {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <h2>Página no Encontrada</h2>
            <Link to="./">Volver a Inicio</Link>
        </div>
    )
}
