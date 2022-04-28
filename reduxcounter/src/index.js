import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counter from './reducer'
import App from './App'
import './index.css'

var destination = document.querySelector('#container')

// 스토어
var store = createStore(counter) // counter는 리듀서!

ReactDOM.createRoot(destination).render(
    <React.StrictMode>
        <Provider store={store}> {/* 앱의 가장 바깥쪽 컴포넌트로서, 어떤 컴포넌트든 리덕스 스토어와 그 관련 기능에 접근할 수 있게 보장한다. */}
            <App/>
        </Provider>
    </React.StrictMode>
)