import React, { Component } from 'react'
import FilpMove from 'react-flip-move'

class TodoItems extends Component {
    constructor(props) {
        super(props)

        this.createTasks = this.createTasks.bind(this)
    }

    delete(key) {
        this.props.delete(key) // TodoList로 연결
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries
        var listItems = todoEntries.map(this.createTasks)

        return (
            <ul className="theList">
                <FilpMove duration={250} easing="ease-out">
                    {listItems}
                </FilpMove>
            </ul>
        )
    }
}

export default TodoItems