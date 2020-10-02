import { USER_LOGGED_IN, 
         USER_LOGGED_OUT,
} from '../../actions/actionsTypes'

const initialState = {
    email: '',
    name: '',
    token: '',
    _id: '',
    occupation: 'Estudante',
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case USER_LOGGED_IN:
            let { email, name, _id } = action.payload.user;
            let token = action.payload.token

            return {
                ...state, email, name, token, _id
            }

        case USER_LOGGED_OUT:
            return initialState
        
        default:
            return state
    }
}

export default reducer