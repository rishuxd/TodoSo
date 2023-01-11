import React, {useState} from 'react'

export default function Addtodo(props) {
    const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");

        const submit = (e)=>{
            e.preventDefault();
            if(!title){
                alert("Title can't be empty.")
            }
            else{
                props.addTodo(title, desc);
                setTitle("");
                setDesc("");
            }
        }
    return (
        <div className='container my-3'>
            <h4 className='mb-3'>ADD TASK</h4>
            <form className='' onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Task</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
