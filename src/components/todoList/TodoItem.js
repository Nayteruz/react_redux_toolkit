import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../../store/todoSlice";

const TodoItem = ({item}) => {

    const dispatch = useDispatch();
    const toggleItem = () => {
        dispatch(updateTodo({
            id: item.id,
            changes:{
                completed: !item.completed
            }
        }))
    }
    const deleteItem = () => {
        dispatch(deleteTodo(item.id))
    }

    return (
        <div className="todo">
            <input type="checkbox" value={item.completed} onChange={toggleItem}/>
            <span>{item.todo}</span>
            <button onClick={deleteItem}>x</button>
        </div>
    );
};

export default TodoItem;