import React, { Component } from 'react'
import IPAddress from './IPAddress'

var xhr // XMLHttpRequest를 뜻하는 거 같음

class IPAddressContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ip_address: '...'
        }

        this.processRequest = this.processRequest.bind(this)
    }

    componentDidMount() {
        xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://ipinfo.io/json', true) // xhr.status === 429 너무 많은 요청 오류가 있을 수 있음
        xhr.send()

        xhr.addEventListener('readystatechange', this.processRequest, false)
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText)

            this.setState({
                ip_address: response.ip
            })
        }
    }

    render() {
        return (
            <IPAddress ip={this.state.ip_address}/>
        )
    }
}

export default IPAddressContainer