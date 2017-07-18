import React from "react";
import TodoList from "./todoList.component";
import AddTodo from "./addTodo.component";
import Navigation from "./navigation.component";
import {Route} from "react-router";
import Error from './errors.components'


export default class App extends React.Component {
    render(){
        return (
            <div className="todoapp">
                <AddTodo/>
                <Route path="/:filter" component={TodoList}/>
                <Navigation/>
                <Error/>
            </div>)
    }
}
