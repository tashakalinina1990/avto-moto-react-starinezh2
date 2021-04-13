import * as actionTypes from './actionTypes'

export const setModalVisible = (isVisible) => ({
  type: actionTypes.SET_MODAL_VISIBLE,
  payload: isVisible,
});

export const addReview = (review) => ({
  type: actionTypes.ADD_REVIEW,
  payload: review,
});
