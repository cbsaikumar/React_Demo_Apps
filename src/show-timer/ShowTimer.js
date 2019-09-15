import React, {Component} from 'react';


export default class ShowTimer extends Component{
    constructor(props){
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.tick();
        }, 1000)  
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    tick(){
        this.setState({
            date: new Date()        
        })
    }

    render(){
        return(
            <h1>It is {this.state.date.toLocaleTimeString()}</h1>
        );
    }
}