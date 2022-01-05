import React,{useState} from "react";
import './App.css';
import SecondComponent from './Components/Massage';
import FirstComponents from "./Components/AddTodo";
import User from "./Components/User"
//import ShowTodo from "./Components/ShowTodo";

import { BrowserRouter as Router, Switch , Route , Link} from "react-router-dom";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <Router>
      <div>
      <header>
        <h1 className="he">Wellcome Todo</h1>
        <Link to="/" > <h4 className="he1">--Go First Page</h4>   <p/></Link>
     </header>
        <Switch>
        <Route path="/User" component>
            <User   />
          </Route>
          <Route path="/secondcomponents" component>
            <FirstComponents  inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
          </Route>
          <Route path="/ShowTodo">
          <SecondComponent todos={todos} setTodos={setTodos} />
          </Route>
          <Route path="/">
            <Home  />          
          </Route>  
        </Switch>
      </div>
    </Router>);
}
function Home() {
  return(
    <div>
     <div className="da">
         <h2 >
             Add Item
         </h2><p/>
         <Link to="/secondcomponents" ><button className="bu">Click</button>   <p/></Link><br/>
         <h2 >
             Show Items
         </h2><p/>
         <Link to="/ShowTodo" ><button className="bu">Click</button>   <p/></Link>
         <h2 >
             Login User 
         </h2>
         <p/>
         <Link to="/User" ><button className="bu">Click</button>   <p/></Link>   
    </div>
    </div>
);
}

