import { USER_LOGGED_IN, USER_LOGGED_OUT, GET_PROJETOS } from '../actionsTypes'

import axios from 'axios'

import { alertin } from '../alertas/alertas'

export const getSaveProjetos = projeto => {
    return {
        type: GET_PROJETOS,
        payload: projeto
    }
}

export const getProjetos = () => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().usuario.token
        axios.get("http://localhost:3001/projects/title", {params: { token } })
            .then(response => {
                alert("TESTE")
                const projeto = response.data
                dispatch(getSaveProjetos(projeto))              
            })
            .catch(req => {
                alert(req)
                dispatch(alertin({open: false,
                    alertTitle: 'Erro',
                    severity: 'error',
                    texto: 'Erro em carregar os Projetos'}))
            })  
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
                    dispatch(alertin({open: false,
                        alertTitle: 'Desconhecido',
                        severity: 'warning',
                        texto: 'Alguma coisa aconteceu, tente novamente mais tarde'}))
                }
                else{
                    projeto = response.data
                    dispatch(alertin({open: true,
                        alertTitle: 'Criado com sucesso',
                        severity: 'success',
                        texto: "Projeto criado com sucesso"}))
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
