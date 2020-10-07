import { TECNOLOGIA_IN, CREATE_TASK } from '../actionsTypes'
import axios from 'axios'

import { alertin } from '../alertas/alertas'

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

export const saveTask = (projeto, task) => {
    return (dispatch, getState) => {
        const titleTask = task.title
        const aboutTask = task.about
        const { title, about, team} = projeto
        const { assignedTo, frontend, backend, banco, category, subcategory, finishedAt} = task
        
      const token = 'Bearer ' + getState().usuario.token
      axios.put("https://afternoon-brook-96552.herokuapp.com/projects/"+projeto._id, null, { params: {
            title,
            about,            
            team,
            titleTask,
            aboutTask,
            assignedTo,
            frontend,
            backend,
            banco,
            category,
            subcategory,
            finishedAt,
            token
          }} )
            .then(response => {
                dispatch(alertin({open: false,
                    alertTitle: 'Criação concluída',
                    severity: 'success',
                    texto: 'Task criada com sucesso'}))
            })
            .catch(req => {
                dispatch(alertin({open: false,
                    alertTitle: 'Erro',
                    severity: 'error',
                    texto: 'Erro em criar a Task'}))
            })
        
    }
}
