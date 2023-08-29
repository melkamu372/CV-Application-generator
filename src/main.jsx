import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Greetings.jsx'
import Greetings from './Greetings.jsx'
import TodoLists from './TodoLists.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greetings />
    <TodoLists />
  </React.StrictMode>,
)
