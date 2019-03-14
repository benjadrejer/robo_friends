import types from '../actions/types';

const initialState = {
  robots: [],
  loading: false,
  error: '',
}

const requestReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case types.FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        robots: action.payload,
        filteredRobots: action.payload,
      }
    case types.FETCH_ROBOTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.FETCH_ROBOTS_PENDING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}

export default requestReducer;
