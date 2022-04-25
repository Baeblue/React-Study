import React, { Component } from 'react'
import './css/HelloWorld.css'

class HelloWorld extends Component { // 이전에는 React.Component를 썼었는데 이제 import를 하니까 그냥 Component로 쓰는 듯
    render() {
        return (
            <div className="helloContainer">
                <h1>Hello, world!</h1>
            </div>
        )
    }
}

export default HelloWorld