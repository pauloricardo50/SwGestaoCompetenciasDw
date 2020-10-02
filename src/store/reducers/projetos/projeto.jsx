import { PROJECT_IN, 
    PROJECT_OUT,
} from '../../actions/actionsTypes'

const initialState = {
title: 'teste@teste.com.br',
about: 'teste',
responsible: '',
team: [],
task: [],
dataInicio: '',
dataFim: '',
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
   
   default:
       return state
}
}

export default reducer