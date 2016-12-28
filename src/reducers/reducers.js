import { combineReducers } from 'redux';
import { ADD_PLANT, REMOVE_PLANT, SET_NAME, SET_DESCRIPTION } from '../actions/actions.js';

const plants = (state = {}) => state;

const plot = (state = {}, action) => {
  switch (action.type) {
  case ADD_PLANT: {
    if (action.slot > -1) {
      return {...state, plants: [
        ...state.plants,
        { key: action.key, slot: action.slot }
      ]};
    }
    return state;
  }
  case REMOVE_PLANT:
    return {...state, plants: [
      ...state.plants.slice(0, action.index),
      ...state.plants.slice(action.index + 1)
    ]};
  case SET_NAME:
    return {...state, name: action.name};
  case SET_DESCRIPTION:
    return {...state, description: action.description};
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  plants, plot
});

export default rootReducer;
