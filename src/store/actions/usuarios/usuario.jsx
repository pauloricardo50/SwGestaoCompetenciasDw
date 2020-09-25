import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actionsTypes'
import React, { Component } from "react";

import axios from 'axios'
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Admin from "../../../layouts/Admin"

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
                    alert("Usuário não encontrado")
                    
                }
                else if(error[error.length - 1]=="401"){
                    alert("Senha inválida")
                }
                else{
                    alert("Algo deu errado, tente novamente")
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
                user = response.data
                dispatch(armazenaInfoUsuario(user))
            })
            .catch(req => {
                const error = req.message.split(' ')
                if (error[error.length - 1]=="404"){
                    alert("Usuário já cadastrado")
                    
                }
                else if (error[error.length - 1]=="403"){
                    alert("Campo Senha vazio")
                }
                else if (error[error.length - 1]=="402"){
                    alert("Campo Nome vazio")
                }
                else if (error[error.length - 1]=="401"){
                    alert("Campo E-Mail vazio")
                }
                else{
                    alert("Algo deu errado, tente novamente")
                }
            })
    }
}