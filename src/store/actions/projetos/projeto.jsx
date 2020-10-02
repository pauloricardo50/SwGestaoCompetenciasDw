import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actionsTypes'

import axios from 'axios'

import { alertout, alertin } from '../alertas/alertas'

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}


export const criarProjeto = projeto => {
    return (dispatch, getState) => {
      const { title, about, team, tasks, objectives } = projeto
      const token = 'Bearer ' + getState().usuario.token
      axios.post("http://localhost:3001/projects", null, { params: {
            title,
            about,
            team,
            tasks,
            objectives,
            token
          }})
            .then(response => {
                projeto = response.data
                alert(JSON.stringify(projeto))
            })
            .catch(req => {
                alert(JSON.stringify(req))
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
        
    }
}