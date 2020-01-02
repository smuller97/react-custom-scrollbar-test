export const lightMachine = {
  id: 'light',
  initial: 'step1',
  states: {
    step1: {
      on: {
        NEXT: 'step2'
      }
    },
    step2: {
      on: {
        NEXT: 'step3'
      }
    },
    step3: {
      on: {
        NEXT: 'step4'
      }
    },
    step4:{
      on:{
        NEXT:'step4'
      }
    }
  }
};