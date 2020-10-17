import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css'
import App from './src/App'
 
render(
    <Router>
        <App />
    </Router>,
    document.querySelector('#root')
)
