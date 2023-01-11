import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className='container mt-5'>
            <h4>TODO LIST</h4>
            {props.todolist.length===0? "Nothing to display.":
            props.todolist.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}
