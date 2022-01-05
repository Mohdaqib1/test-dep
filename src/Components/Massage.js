import React, { useState, useEffect } from 'react';
import Delete from './delete.png';

import Edit from './edit.png';



export default function Todos() {
  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])

  const fetchTodos = async () => {
    const response = await fetch("https://new-api-todo.herokuapp.com/todo")
    const todos = await response.json()
    console.log(todos.data);
    setTodos(todos.data)
  }
  useEffect(() => {
    fetchTodos()
  }, [])


  const fetchUsers = async () => {
    const response = await fetch("https://new-api-todo.herokuapp.com/user")
    const users = await response.json()
    console.log(users.udata);
    setUsers(users.udata)
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <h2 className='hee'>{users.map((username) => (<p>{username.username}</p>))}</h2>
      <table className="t1">

        <tr>

          <td className='todo-item'> {todos.map((todo) => (<p>{todo.todo}<button className="b2e" >   <img src={Edit} className="b2ed" />  </button>
            <button className="b2d">    <img src={Delete} className="b2ed" /> </button></p>))}
          </td>
        </tr>
      </table>



    </div>
  )
}
 /*
<table className="t1">
                  <tr>
                  <td className='todo-item'> {users.map((username)=>( <p>{username.username}<button  className="b2e" >   <img src={Edit} className="b2ed"/>  </button> 
                  <button  onClick={() => {const confirmBox = window.confirm("Do you really want to delete this item?")
                 if (confirmBox === true) {"Deleted"}}} className="b2d">    <img src={Delete}  className="b2ed"/> </button> </p>))}
                   </td>
                   </tr>
                   </table>/*/