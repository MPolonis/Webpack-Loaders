import React from 'react';
import style from '../containers/List.css';

const TodoList = props => {
const listToDo = props.data.map((item) => <li key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>);

return (
    <div>
        <h2>Tasks to do:</h2>
        <ul className={style.ToDoList}>
            {listToDo}
        </ul>
    </div>
)
}

export default TodoList;