import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MenuContainer from './MenuContainer'

// ReactDOM.render(
//     <MenuContainer/>,
//     document.querySelector('#container')
// )

// React 18에서는
const root = document.getElementById('container')

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <MenuContainer/>
    </React.StrictMode>
)