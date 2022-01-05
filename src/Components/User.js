
import React,{ useState} from 'react'

export default function Add() {
    const [useritem, setUserItem] = useState("")
    
    const handleInput = event  => {
        setUserItem(event.target.value)
        console.log(event);
      }

    
      const handleSubmit = (event) => {
        if(useritem ===""){
          alert('Please enter something');
          event.preventDefault();
        }
        else{
        const newUser = {
          id: Math.random()*100,
          username: useritem
        }
        console.log(useritem);
        event.preventDefault();
        setUserItem("")
    
        fetch("https://new-api-todo.herokuapp.com/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser)
        })
      }
      }

    return (
      <div>
        <form className="frm">
            <input type="text" value={useritem} onChange={handleInput} className='input'/>
            <button type="button" onClick = {handleSubmit} className="b1" >Add User</button>
        </form>
        </div>
    )
}
