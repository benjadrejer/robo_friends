import types from '../actions/types';

const initialState = {
  searchField: '',
}

const robotReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case types.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      }
    default:
      return state;
  }
}

export default robotReducer;
