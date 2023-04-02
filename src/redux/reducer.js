

const initialState = {
    num: 0
}

export default function reducer (state = initialState, action){
    if(action.type === 'INCREMENT'){
        return {...state, num: action.payload}
    }
    else if (action.type === 'DECREMENT'){
        return {...state, num: action.payload}

    }
    else if (action.type === 'MULTIPLY'){
        return {...state, num: action.payload}

    }
    else if (action.type === 'DIVISION'){
        return {...state, num: action.payload}

    }
    return state
}