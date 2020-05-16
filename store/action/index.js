import axios from 'axios';
import Cookies from 'js-cookie';
import {
    SEND_MESSAGE,
    CLEAR_MESSAGE,
    UPD_SITE,
    DELETE_MESSAGE
} from '../action/type';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const URL = `${publicRuntimeConfig.base_url}`;

export function SendMessage(data){

    const request = axios({
        method:'POST',
        url:`${URL}/api/v1/messages`,
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    }).then( response => response.data )


    return {
        type:SEND_MESSAGE,
        payload: request
    }

}

export function ClearMessage(){
    return {
        type:CLEAR_MESSAGE,
        payload: null
    }
}

export function UpdateSite(data){

    const request = axios({
        method:'PATCH',
        url:`${URL}/api/v1/site`,
        data: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${Cookies.getJSON('x-jwt')}`
        }
    }).then( response => response.data)


    return {
        type: UPD_SITE,
        payload: request
    }
}

export function DeleteMessage(id){

    const request = axios({
        method:'DELETE',
        url:`${URL}/api/v1/messages`,
        data:JSON.stringify({id:id}),
        headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${Cookies.getJSON('x-jwt')}`
        }
    }).then( response => response.data )

    return {
        type:DELETE_MESSAGE,
        payload:request
    }

}