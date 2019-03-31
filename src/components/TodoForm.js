import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        var taskTodo = document.getElementById('task');
        var val = taskTodo;
        this.setState({
            inputValue: '',
        });
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input id="task" value={this.state.inputValue} onChange={this.onChange} type="text" placeholder="add a new task..." />
                <button onClick={this.onChange}>Add</button>
            </form> 
        )
    }
}




export default TodoForm;