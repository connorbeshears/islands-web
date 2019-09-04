import React from 'react'

class Tile extends React.Component{
    render(){
        return(
            <button className={this.props.tileType}></button>
        );
    }
}

export default Tile;