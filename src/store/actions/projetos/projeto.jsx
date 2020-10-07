import { GET_PROJETOS, GET_PROJETO_UPDATE, UPDATE_PROJETO_TASK } from '../actionsTypes'

import axios from 'axios'

import { alertin } from '../alertas/alertas'

export const getSaveProjetos = projeto => {
    return {
        type: GET_PROJETOS,
        payload: projeto
    }
}

export const getUpdateProjetos = projeto => {
    return {
        type: GET_PROJETO_UPDATE,
        payload: projeto
    }
}

export const getProjetos = () => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().usuario.token
        axios.get("https://afternoon-brook-96552.herokuapp.com/projects/title", {params: { token } })
            .then(response => {
                const projeto = response.data
                dispatch(getSaveProjetos(projeto))              
            })
            .catch(req => {
                dispatch(alertin({open: false,
                    alertTitle: 'Erro',
                    severity: 'error',
                    texto: 'Erro em carregar os Projetos'}))
            })  
    }
}

export const getProjeto = (idprojeto) => {
    return async (dispatch, getState) => {
        const token = 'Bearer ' + getState().usuario.token
            
        await axios.get("https://afternoon-brook-96552.herokuapp.com/projects/"+idprojeto, {params: { token } })
            .then(response => {
                const projeto = response.data
                dispatch(getUpdateProjetos(projeto))              
            })
            .catch(req => {
                dispatch(alertin({open: false,
                    alertTitle: 'Erro',
                    severity: 'error',
                    texto: 'Erro em carregar o Projeto'}))
            }) 
    }
}

export const criarProjeto = projeto => {
    return (dispatch, getState) => {
      const { title, about, team, tasks, createdAt, endedAt } = projeto
      const token = 'Bearer ' + getState().usuario.token
      axios.post("https://afternoon-brook-96552.herokuapp.com/projects", null, { params: {
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
                        alertTitle: 'Campo Vazio',
                        severity: 'error',
                        texto: 'Alguns campos estão vazios, favor preencher'}))
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

export const updateTaskProjeto = (projetoUpdate,task) => {
    return {
        type: UPDATE_PROJETO_TASK,
        payload: projetoUpdate, task
    }
}

// export const updateProjeto = 
