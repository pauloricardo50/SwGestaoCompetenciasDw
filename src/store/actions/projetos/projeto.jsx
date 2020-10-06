import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actionsTypes'

import axios from 'axios'

import { alertin } from '../alertas/alertas'

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}


export const criarProjeto = projeto => {
    return (dispatch, getState) => {
      const { title, about, team, tasks, createdAt, endedAt } = projeto
      const token = 'Bearer ' + getState().usuario.token
      alert(JSON.stringify(projeto))
      axios.post("http://localhost:3001/projects", null, { params: {
            title,
            about,
            team,
            tasks,
            createdAt,
            endedAt,
            token
          }})
            .then(response => {
                if(projeto.title === '' || projeto.about === '' || projeto.endedAt ===''){
                    dispatch(alertin({open: true,
                        alertTitle: 'Desconhecido',
                        severity: 'warning',
                        texto: 'Alguma coisa aconteceu, tente novamente mais tarde'}))
                }
                else{
                    projeto = response.data
                    alert(JSON.stringify(projeto))
                }
            })
            .catch(req => {
                dispatch(alertin({open: false,
                    alertTitle: 'Desconhecido',
                    severity: 'warning',
                    texto: 'Alguma coisa aconteceu, tente novamente mais tarde'})) 
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