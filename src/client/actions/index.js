import { INCREMENT, DECREMENT } from './action-types';

export const increment = () => dispatch => {
    dispatch({ type: INCREMENT });
};

export const decrement = () => dispatch => {
    dispatch({ type: DECREMENT });
};