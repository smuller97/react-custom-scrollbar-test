import ReactDOM from "react-dom";
import Lights from './Components/Lights';
import React, { Component } from 'react';
import "./styles.css";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      greenText:'green light',
      yellowText:'yellow light',
      redText:'red light'
    }
  }
  render(){
  return (
    <div className="App">
      <Lights
      states={this.state}
      >
      </Lights>
    </div>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));