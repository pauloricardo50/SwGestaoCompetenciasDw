import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actionsTypes'

import axios from 'axios'

import { alertout, alertin } from '../alertas/alertas'

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}


export const autenticarUsuario = user => {
    return (dispatch) => {
        const { email, password } = user
        axios.post("https://afternoon-brook-96552.herokuapp.com/auth/authenticate", null,  { params: {
            email,
            password
          }})
            .then(response => {
                user = response.data
                dispatch(armazenaInfoUsuario(user))                
            })
            .catch(req => {
                const error = req.message.split(' ')
                if (error[error.length - 1]=="404"){
                    dispatch(alertin({open: false,
                        alertTitle: 'Erro',
                        severity: 'error',
                        texto: 'E-mail incorreto, verifique e tente novamente'}))                    
                }
                else if(error[error.length - 1]=="401"){
                    dispatch(alertin({open: false,
                        alertTitle: 'Erro',
                        severity: 'error',
                        texto: 'Senha incorreta, verifique e tenta novamente'}))
                }
                else{
                    dispatch(alertin({open: false,
                        alertTitle: 'Desconhecido',
                        severity: 'warning',
                        texto: 'Falha no login, tente novamente mais tarde'}))
                }
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
        axios.post("https://afternoon-brook-96552.herokuapp.com/auth/register", null,  { params: {
            name,
            email,
            password
          }})
            .then(response => {
                alert("Usuário cadastrado")
            })
            .catch(req => {
                const error = req.message.split(' ')
                if (error[error.length - 1]=="404"){
                    dispatch(alertin({open: false,
                        alertTitle: 'Error',
                        severity: 'error',
                        texto: 'Este e-mail já está sendo utilziado, favor use outro'}))
                    
                }
                else if (error[error.length - 1]=="403"){
                    dispatch(alertin({open: false,
                        alertTitle: 'Campo nulo',
                        severity: 'error',
                        texto: 'O campo Senha está nulo, favor preencher a senha'}))
                }
                else if (error[error.length - 1]=="402"){
                    dispatch(alertin({open: false,
                        alertTitle: 'Campo nulo',
                        severity: 'error',
                        texto: 'O campo Nome está nulo, favor preencher o nome'}))
                }
                else if (error[error.length - 1]=="401"){
                    dispatch(alertin({open: false,
                        alertTitle: 'Campo nulo',
                        severity: 'error',
                        texto: 'O campo E-mail está nulo, favor preencher o e-mail'}))
                }
                else{
                    dispatch(alertin({open: false,
                        alertTitle: 'Desconhecido',
                        severity: 'warning',
                        texto: 'Falha no cadastro, tente novamente mais tarde'}))
                }
            })
    }
}