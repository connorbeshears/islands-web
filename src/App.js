import React from 'react';
import Island from '../src/objects/island.js'

// function genArray(){
//   var outArray = new Array(5)
//   // for(var i = 0; i < 5; ++i){
//   //   outArray.push(new Array(5));
//   // }
// }

function App() {
    return ( 
      <div className = {"center"}>
        <h1>Welcome to the islands</h1>
        <Island className="center"></Island>
      </div>
    );
}

export default App;