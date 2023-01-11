import React from 'react'

export default function TodoItem(props) {
  return (
    <div className='border-bottom py-3'>
      <h5>{props.todo.sno}. {props.todo.title}</h5>
      <div className="container">
      <p className='m'>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      </div>
    </div>
  )
}
