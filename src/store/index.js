import { createStore } from 'redux';

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {

    if(action.type === 'INCREMENT') {
        return { counter: state.counter + 1 }
    }

    if(action.type === 'INCREASE') {
        return { counter: state.counter + action.amount }
    }

    if(action.type === 'DECREMENT') {
        return { counter: state.counter - 1 }
    }

    if(action.type === 'RESET_COUNTER') {
        return { counter: 0 }
    }

    return state;
}


const store = createStore(counterReducer);

export default store;