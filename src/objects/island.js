import React from 'react'
import Tile from "../objects/tiles.js"

class Island extends React.Component{

    makeEmptyArray(){
        var list = []
        for(var i = 0; i < 560; i++){
            list.push(0)
        }
        return list
    }

    makeIsland(){
        var islandStart = this.makeEmptyArray()
        var island = islandStart.map((item, index) => {
            return (
                <Tile tileType = {this.getType()}></Tile>
            )
        })
        return island;
    }

    getType(){
        var num = Math.floor(Math.random() * 5)
        console.log("Number: " + num)
        if(num == 0){
            return("tileIsland")
        }
        else if (num == 1){
            return("tileCloud")
        }
        else{
            return("tileOcean")
        }
    }

    render(){
        return(
            <div>
                {this.makeIsland()}
            </div>
        );
    }
}

export default Island;