import { USER_LOGGED_IN, 
         USER_LOGGED_OUT,
         GET_USUARIOS
} from '../../actions/actionsTypes'

const initialState = {
    email: '',
    name: '',
    token: '',
    _id: '',
    occupation: 'Estudante',
    getUsuarios: {}
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

        case GET_USUARIOS:
            let getUsuarios = action.payload
            return {                
                ...state, getUsuarios
            }
        
        default:
            return state
    }
}

export default reducer