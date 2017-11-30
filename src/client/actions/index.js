import { INCREMENT, DECREMENT } from './action-types';

export function increment () {
    return { type: INCREMENT };
}

export function decrement () {
    return { type: DECREMENT };
}