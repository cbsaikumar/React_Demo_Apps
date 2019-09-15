import React, {Component} from 'react';

export default class LikeButton extends Component{
    constructor(props){
        super(props)

        this.state = {
            liked: false
        }
    }

    handleClick = () => {
        this.setState({
            liked : !this.state.liked
        })
    }

    render(){
        const message = this.state.liked ? 'You have already liked it!' : 'You have not liked it yet!'
        const buttonText = this.state.liked ? 'Dislike' : 'Like'
        return(
            <div>
                <h2>{message}</h2>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}