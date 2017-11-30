import { INCREMENT, DECREMENT } from '../actions/action-types';

export default function (state = { count: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        
        default:
            return state;
    }
}