import { TECNOLOGIA_IN, CREATE_TASK } from '../actionsTypes'

export const getTecnologias = () => {
    return {
        type: TECNOLOGIA_IN,
    }
}

export const criarTask = (task) => {
    return {
        type: CREATE_TASK,
        payload: task
    }
}

export const saveTask = task => {
    return (dispatch, getState) => {
      const { title, about, team, tasks, createdAt, endedAt } = projeto
      const token = 'Bearer ' + getState().usuario.token
      axios.put("http://localhost:3001/projects", null, { params: {
            title,
            project,
            frontend,
            backend,
            banco,
            createdAt,
            endedAt,
            about,
            category,
            subcategory,
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
