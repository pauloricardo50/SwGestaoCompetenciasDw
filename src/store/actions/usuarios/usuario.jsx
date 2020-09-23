import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actionsTypes'

import axios from 'axios'

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const autenticarUsuario = user => {
    return (dispatch) => {
        const { email, password } = user
        var postData = { email, password };
        axios.get("http://localhost:3001/projects")
            .then(response => {
                user = response.data
                dispatch(armazenaInfoUsuario(user))
            })
            .catch(error => {
                alert(error)
            })
    }
}

export const armazenaInfoUsuario = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user,
    }
}


export const criarUsuario = user => {

    return (dispatch) => {
        const { name, email, password } = user
        var postData = { name, email, password };
        axios.post("https://afternoon-brook-96552.herokuapp.com/projects")
            .then(response => {
                alert("THEN")
                user = response.data
                dispatch(armazenaInfoUsuario(user))
            })
            .catch(error => {
                alert(error)
                return "Problema ao criar conta, tente novamente"
            })
    }
}