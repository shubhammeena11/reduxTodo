import React from 'react'
import Todo from './component/Todo.jsx'
import List from './component/List.jsx'
import './index.css';


function App() {
  return (
    <div className='bg-slate-600 h-auto min-h-screen'>
     <Todo/>
     <List/>
    </div>
  )
}

export default App
