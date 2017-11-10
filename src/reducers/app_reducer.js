export default function(state = {}, action) {
    //reducers have 2 arguments--the current state and the action
    //reducers will always return the next state.

    switch(action.type) {
        case 'FETCH_DATA':
            const newState = Object.assign({}, ...state, action.payload.data)
            return newState;
        default: 
            return state;
    }

}