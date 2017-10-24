import {APP_INIT} from "app/actions"

const initalState = {
}
const handlers = {
  [APP_INIT]: (state) => {
    return state
  }
}

export default function app(state=initalState, action) {
  const type = action.type
  if (!handlers[type]) {return state}
  return handlers[type](state, action)
}


