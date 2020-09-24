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
        axios.post("http://localhost:3001/auth/authenticate", null,  { params: {
            email,
            password
          }})
            .then(async response => {
                user = response.data
                await dispatch(armazenaInfoUsuario(user))                
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
                    alert("Erro desconhecido, tente novamente")
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
        
        axios.post("http://localhost:3001", null,  { params: {
            name,
            email,
            password
          }})
            .then(response => {
                user = response.data
                dispatch(armazenaInfoUsuario(user))
            })
            .catch(error => {
                return "Problema ao criar conta, tente novamente"
            })
    }
}