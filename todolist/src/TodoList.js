import React, { Component } from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this)
    }

    addItem(e) {
        var itemArray = this.state.items
        
        if (this._inputElement.value !== '') {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            })

            this.setState({
                items: itemArray
            })

            // 기존의 상태를 변경하지 않고 상태 객체에 아이템을 추가하는 또 다른 방법 _ 한 박자 늦게 item이 추가되는 건 뭘까...
            // var newItem = {
            //     text: this._inputElement.value,
            //     key: Date.now()
            // }

            // this.setState((prevState) => {
            //     return {
            //         items: prevState.items.concat(newItem)
            //     }
            // })

            this._inputElement.value = ''
        }

        console.log(itemArray)
        // console.log(this.state.items)

        e.preventDefault() // 이벤트의 기본 동작을 막는다. 사용자가 폼을 제출하면 기본적으로 페이지는 다시 로딩되며 모든 사항이 초기화된다. 그것을 막기 위함!
    }

    render() {
        return  (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList