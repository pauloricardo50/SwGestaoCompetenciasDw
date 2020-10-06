import { PROJECT_IN, 
    PROJECT_OUT,
    GET_PROJETOS
} from '../../actions/actionsTypes'

const initialState = {
title: '',
about: '',
responsible: '',
team: [],
task: [],
dataInicio: '',
dataFim: '',
getProjetos: {}
}

const reducer = (state = initialState, action) => {

switch (action.type) {

   case PROJECT_IN:
       let { email, name, _id } = action.payload.user;
       let token = action.payload.token

       return {
           ...state, email, name, token, _id
       }

   case PROJECT_OUT:
       return initialState
   
    case GET_PROJETOS:
        let getProjetos = action.payload
        return {                
            ...state, getProjetos
        }

   default:
       return state
}
}

export default reducer