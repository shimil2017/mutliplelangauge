import { createStore } from 'redux'
const INITIAL_STATE={
   lang:''  
  }
export const language = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'LANGAGE_CHANGE':
    //alert(action.payload)
    return { ...state, lang:action.payload}
  default:
    return state;
  }
}

let store = createStore(language);

export default store;