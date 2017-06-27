//程序框架入口
import React from 'react';
import uuid from 'uuid';

import List from './List';
import CreateButton from "./CreateButton";
import TodoStore from "../stores/TodoStore"
import TodoAction from "../actions/TodoAction";


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:TodoStore.getAll()
        }
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }
    createTodo(){
        //创建TODO回调函数
        TodoAction.create({
            id:uuid.v4(),
            content:"我是王刚"
        })

    }
    deleteTodo(id){
        //删除TODO回调函数
        TodoAction.delete(id);
    }
    onChange(){
        this.setState({
            todos:TodoStore.getAll()
        })
    }
    render(){
        return(
            <div>
                <List items={this.state.todos} onDelete={this.deleteTodo} />
                <CreateButton onClick={this.createTodo} />
            </div>
        )
    }
};

export default Todo;