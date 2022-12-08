import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {todoSelectors, clearTodos, restoreTodo} from "../../store/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const dispatch = useDispatch();
    const allTodos = useSelector(todoSelectors.selectAll);
    const todoCount = useSelector(todoSelectors.selectTotal);
    const deletedTodos = useSelector(state => state.todos.deleteTodos);

    const clearAllTodos = () => {
        dispatch(clearTodos());
    }
    const restore = (todo) => {
        dispatch(restoreTodo(todo))
    }

    return (
        <div className="todo-list">
            <h3>Список дел:</h3>
            <h4>Всего дел: {todoCount}</h4>
            <button
                className="delete-btn"
                onClick={clearAllTodos}
            >Удалить список</button>
            <div>
                {allTodos.map(todo =>
                    <TodoItem key={todo.id} item={todo} />
                )}
            </div>
            <h3>Удаленные задачи</h3>
            <div>
                {deletedTodos.map(todo =>
                    <div key={todo.id} className="deleted-todo">
                        <span>{todo.todo}</span>
                        <button onClick={() => restore(todo)}>Вернуть</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;