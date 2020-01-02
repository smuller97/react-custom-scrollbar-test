import React, { Component } from "react"; //import of React
import { lightMachine } from "../Xstate/Lightmachine"; //import statemachine
import { State, withStateMachine } from "react-automata";
//#region import of components
import  Green  from "./Green";
import Yellow from './Yellow';
import Red from './Red';
import Accept from "./Accept";
//#endregion

export class Lights extends Component {
  render() {
    return (
      <div>

        <State is="step1">
 
          <Green green={this.props.states.greenText}></Green>
        </State>

        <State is="step2">
          yellow
          <Yellow yellow={this.props.states.yellowText}></Yellow>
        </State>

        <State is="step3" >
          red
          <Red red={this.props.states.redText}></Red>
        </State>
        <State is="step4">
          <Accept states={this.props.states}></Accept>
        </State>
        
        <button
        style={{position: 'absolute', top:'140px',left: '48%'}}
            className="btn-back"
            type="submit"
            onClick={() => {
              this.transitionToState("NEXT");
            }}
          >
          click here
        </button>   
      </div>
    );
  }

  transitionToState = (nextTransition, nextViewstate = {}) => {
    console.log(`Existing State ${this.props.machineState.value}`);
    var statesAvailable = lightMachine.states[this.props.machineState.value].on;
    console.log(`transitionToState available ${JSON.stringify(statesAvailable)} 
              nextTransition ${nextTransition}`);
    if (Object.keys(statesAvailable).includes(nextTransition)) {
      if (!this.inTransition) {
        console.log(`Transition to: ${JSON.stringify(nextTransition)}`);
        var nextState = statesAvailable[nextTransition];
        try {
          console.log(
            `Transition: ${nextTransition} NextState: ${nextState.value}`
          );
          this.props.transition(nextTransition);
        } catch (err) {
          console.log("Transition failed");
        }
      } else {
        console.log(
          `Cannot transition to ${nextTransition} as we are in active transition. We should wait a tick`
        );
      }
    } else {
      console.log(
        `State ${
          this.props.machineState.value
        } cannot transition to ${nextTransition}`
      );
    }
  };
}
export default withStateMachine(lightMachine)(Lights);
