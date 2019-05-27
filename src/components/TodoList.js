import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return this.props.data.map(item => {
            return (
                <div className={style.TodoList} key={item.id}>
                    <Todo 
                        key={item.id}
                        clickEvent={this.props.remove.bind(this, item.id)}
                        text={item.text}
                        id={item.id}
                    />
                </div>
            )
        });
    }
}

export default TodoList;
