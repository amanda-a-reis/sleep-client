function createSleep(action) {
    return ('cachorro')
}


export let initialState = {
    sleep: 'hello',
}

export function reducer(state, action) {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                sleep: createSleep(action.payload) 
            }
        default: {
            return {
                ...state,
                state: createSleep(action.payload)
            }
        }
    }
}