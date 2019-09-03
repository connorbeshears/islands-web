import React from 'react'

class Button extends React.Component{
    render(){
        return(
            <button className={this.props.tileType}></button>
        );
    }
}

export default Button;