import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        this.decrement = this.decrement.bind(this); //Explicit binding is required when using normal functions
    }

    //Explicit binding is not required when using arrow functions
    increment = () => {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }

    decrement(){
        this.setState(previousState => {
            return {
                count: previousState.count - 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Counter value : {this.state.count}</h1>
                <h2><button onClick={this.increment}>Increment</button></h2>
                <h2><button onClick={this.decrement}>Decrement</button></h2>
            </div>
        )
    }
}