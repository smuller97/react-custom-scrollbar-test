
/*
test("lights with imported components", () => {
  testStateMachine({ lightMachine }, Lights);
});
*/

import { testStateMachine, withStateMachine } from 'react-automata';
import { Lights } from '../Components/Lights';
import { lightMachine } from "../Xstate/Lightmachine";

test('lights with imported components', () => {

  const fixtures = {
    initialData: {
      states: {
        'greenText': 'green light',
        'yellowText':'yellow light',
        'redText':'red light'
      }
    }
  }

  const StateMachine = withStateMachine(lightMachine)(Lights)

  testStateMachine(StateMachine, { fixtures });
});