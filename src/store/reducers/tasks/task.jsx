import { TECNOLOGIA_IN, CREATE_TASK } from '../../actions/actionsTypes'

const initialState = {
    backend: ["Javascript - Express", "Python - Django","Ruby - Rails", "PHP - Laravel", "Java - Spring"],
    frontend:["Javascript - React", "Javascript - Angular", "Javascript - Vue.js", "Javascript - Ionic","Dart - Flutter"],
    bd: ["MongoDB", "Firebase", "Oracle", "MySQL", "DynamoDB"],
    title: '',
    about: '',
    projeto: '',
    categoria: '',
    subcategoria: '',
    dataInicio: '',
    dataFim: '',
    tecnologiaBack: '',
    tecnologiaFront: '',
    tecnologiabd: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

    case TECNOLOGIA_IN:

        return initialState

    case CREATE_TASK: 
        let { title, about, projeto, categoria, subcategoria, dataFim, dataInicio, tecnologiabd, tecnologiaFront, tecnologiaBack } = action.payload
        return {...state, title, about, projeto, categoria, subcategoria, dataFim, dataInicio, tecnologiabd, tecnologiaFront, tecnologiaBack }
    
    default:
        return state
    }
}

export default reducer