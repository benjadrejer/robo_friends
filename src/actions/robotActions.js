import types from './types';

export const fetchRobots = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_ROBOTS_PENDING,
  })
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    let response = await fetch(url)
    response = await response.json();
    dispatch({
      type: types.FETCH_ROBOTS_SUCCESS,
      payload: response,
    }); 
  } catch(error) {
    dispatch({
      type: types.FETCH_ROBOTS_FAILED,
      payload: error,
    })
  }
}

export const setSearchField = (text) => {
  return {
    type: types.CHANGE_SEARCH_FIELD,
    payload: text,
  }
}