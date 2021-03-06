import { combineReducers } from 'redux';
import * as Types from '../actionTypes/getCoursesData';

function makeRequestReducer(actionType, initialState = {}) {
  const init = {
    data: [],
    error: false,
    isLoading: false,
    response: false,
    ...initialState,
  };

  return (state = init, { type, payload }) => {
    switch (type) {
      case actionType:
        return {
          ...state,
          isLoading: true,
          response: false,
        };
      case `${actionType}.success`:
        return {
          ...state,
          isLoading: false,
          data: payload.data,
          error: false,
          response: true,
        };
      case `${actionType}.failed`:
        return {
          ...state,
          isLoading: false,
          data: payload,
          error: true,
          response: true,
        };
      default:
        return state;
    }
  };
}

export default combineReducers({
  getSubjects: makeRequestReducer(Types.GET_SUBJECTS),
  getChapters: makeRequestReducer(Types.GET_CHAPTERS),
  getTopics: makeRequestReducer(Types.GET_TOPICS),
  getSubtopics: makeRequestReducer(Types.GET_SUBTOPICS),
});
