import { PROJECT_IN, 
    PROJECT_OUT,
    GET_PROJETOS,
    GET_PROJETO_UPDATE,
    UPDATE_PROJETO_TASK
} from '../../actions/actionsTypes'

const initialState = {
title: '',
about: '',
responsible: '',
team: [],
task: [],
dataInicio: '',
dataFim: '',
getProjetos: {},
projetoUpdate: {}
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
    case GET_PROJETO_UPDATE:
        let projetoUpdate = action.payload.project
        return {                
            ...state, projetoUpdate
        }
    case UPDATE_PROJETO_TASK:
        let projeto = action.payload
        projeto.tasks.push(action.task)
        return{
            ...state, projetoUpdate: projeto
            
        }
    

   default:
       return state
}
}

export default reducer