import { Component } from 'react';

class Todo extends Component {

    constructor(){
        super();
        this.state = {
            userInput : '',
            items: []
        };
    }
    onChange(event){
        console.log(event.target.value);
    }

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <form>
                    <input 
                        value={this.state.userInput} 
                        type="text" placeholder="enter a text"
                        onChange={this.onChange.bind(this)}
                    />
                    <button>ajouter</button>
                </form>
            </div>
        );
    }
}
export default Todo;