import { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
      setList([...list, input]);
      setInput("");
      
  };

  const deleteTodo = (text) => {
    const newList = list.filter((input) => {
      return input !== text;
    });
    setList(newList);
  };

  return (
    <div  className="App">
      <h1>Todo List</h1>
      <form className="input-wrapper">
        <input type="text" name="input" value={input} placeholder="Create a new todo" onChange={handleChange}/>
        <button onClick={addTodo}>Add</button>
      </form>


      <div className="list">
        {list?.length > 0 ? (
          <ul className="todo-list">
            {list.map((entry, index) => (
              <div className="todo">
                <li key={index}> {entry} </li>
                <button className="delete-button" onClick={() => {deleteTodo(entry);}}>Delete</button>
              </div>
            ))}
          </ul>
        ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
      </div>
    </div>
  )
    
}
export default App;
