import {combineReducers} from 'redux'

const initialState = {
  list: []
}

const mockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOCK1':
      return {
        ...state,
        list: [1,2,3]
      }
    default:
      return state
  }
}

export default combineReducers({
  MockReducer: mockReducer
})