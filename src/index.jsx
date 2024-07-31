import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from '@/route/index'
import '@/static/common.css'
import '@/static/style.common'

const RootEle = () => {
    const element = useRoutes(routes)
    return element
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <React.StrictMode>
        <HashRouter>
            <RootEle />
        </HashRouter>
    </React.StrictMode>
)
