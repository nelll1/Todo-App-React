import React, {useState} from "react";
import './Style/Todo.css'
function App() {

    let [Todo, setTodo] = useState("")
    let [toDoList, setToDoList] = useState([])
  
    const handleChange = (event) =>{
      const newValue = event.target.value;
      setTodo(newValue)
    }

    const handleSubmit = () => {
      setToDoList((prevValues) => {
        return [...prevValues, Todo];
      });
        setTodo("")
    }

    
    function deleteList(id) {
       setToDoList(prevValues => {
        return prevValues.filter((currentValue, index) => {
          return index !== id;
        })
       })
       console.log(id);
        
    }
  

    const getList = toDoList.map((toDoItem, index) =>
       <li key={index} id={index}  onClick={() => deleteList(index)}> { toDoItem} </li>)
 
  return ( 
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={Todo}/>
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {getList}
        </ul>
      </div>
    </div>
  );
}

export default App;
