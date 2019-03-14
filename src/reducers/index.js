import { combineReducers } from 'redux';
import robotReducer from './robotReducer';
import requestReducer from './requestReducer';

export default combineReducers({
  // test: () => 1,
  robots: robotReducer,
  requests: requestReducer,
});
