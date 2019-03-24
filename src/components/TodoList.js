import React from 'react';
import style from '../containers/List.css';

const TodoList = props => 
    <div>
        <h2>Tasks to do:</h2>
        <ul className={style.ToDoList}>
            {props.list}
        </ul>
    </div>;

export default TodoList;