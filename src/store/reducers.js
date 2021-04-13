import * as ActionTypes from './actionTypes'
import reviews from '../mock/reviews';

const initialState = {
  isModalVisible: false,
  reviews,
};

const reducers = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.SET_MODAL_VISIBLE:

      return Object.assign(
          {},
          state,
          {isModalVisible: action.payload}
      );

    case ActionTypes.ADD_REVIEW:

      return Object.assign(
          {},
          state,
          {reviews: 
            [
              ...state.reviews,
              action.payload
            ]
          }
      );

    default:
      
      return state
  }
};

export default reducers;
