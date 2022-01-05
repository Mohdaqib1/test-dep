
import React,{ useState} from 'react'

export default function Add() {
    const [item, setItem] = useState("")
    
    const handleInput = event  => {
        setItem(event.target.value)
        console.log(event);
    }
      const handleSubmit = (event) => {
        if(item ===""){
          alert('Please enter something');
          event.preventDefault();
        }
        else{
        const newTodo = {
          id: Math.random()*100,
          todo: item
        }
        console.log(item);
        event.preventDefault();
        setItem("")
    
        fetch("https://new-api-todo.herokuapp.com/todo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTodo)
        })
      }
      }

    return (
      <div>
        <form className="frm">
            <input type="text" value={item}  onChange={handleInput} className='input'/>
            <button type="button" onClick = {handleSubmit} className="b1" >Add</button>
        </form>
        </div>
    )
}