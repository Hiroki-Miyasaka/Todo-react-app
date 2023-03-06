import './App.css';
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <div className="App">
      <TodoList todos={todos}/>
      <input type="text"/>
      <button>Add task</button>
      <button>Delete task</button>
      <div>Left task: 0</div>
    </div>
  );
}

export default App;
