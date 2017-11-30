import { INCREMENT, DECREMENT, RESET } from './action-types';

export function increment () {
    return { type: INCREMENT };
}

export function decrement () {
    return { type: DECREMENT };
}

export function reset () {
    return { type: RESET };
}