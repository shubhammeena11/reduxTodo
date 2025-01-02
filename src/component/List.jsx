import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice';

function List() {

  const dispatch=useDispatch()
  const todos=useSelector(state=>state.todos)
  return (
    <>
    <div className='text-orange-100 font-bold text-3xl flex justify-center'>Todo</div>
      {todos.map((todo) => (
        <li key={todo.id} className=" flex justify-between items-center text-white font-medium pb-2 px-60">
          <span
             className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
          >
            {todo.text}
          </span>
          <button
            onClick={(e)=>{e.preventDefault();dispatch(removeTodo(todo.id))}}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default List;
