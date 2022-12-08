import './App.css';
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/TodoList";


function App() {
    return (
        <div className="app">
            <div className="header">RTK Todo list</div>
            <AddTodo />
            <TodoList/>
        </div>
    );
}

export default App;
