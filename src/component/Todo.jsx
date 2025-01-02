import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice";


function Todo() {   
  const [input, setInput] = useState('')
  const dispatch=useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }
  
  return (
    <>
      <div className="h-80 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
          <form onSubmit={handleSubmit} className="flex mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-l"
              placeholder="Add a new task"
            />
            {console.log(input.length)}
            <button
              onClick={()=>{  if (input.length !== 0) {
                addTodo();
              }}}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              Add
             </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Todo;
