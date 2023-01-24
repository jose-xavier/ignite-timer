import { Cycle } from './reducer'

export enum ActionTypes {
  MARK_CURRENT_CYCLES_AS_FINISHED = 'MARK_CURRENT_CYCLES_AS_FINISHED',
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export function createCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLES_AS_FINISHED,
  }
}
