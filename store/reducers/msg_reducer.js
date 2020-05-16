import {
    SEND_MESSAGE,
    CLEAR_MESSAGE,
    DELETE_MESSAGE
} from '../action/type';

export default function(state=null,action){
    switch(action.type){
        case SEND_MESSAGE:
            return {...state, sentEmail: action.payload }
        case CLEAR_MESSAGE:
            return {...state, sentEmail: action.payload }
        case DELETE_MESSAGE:
            return {...state, messages: action.payload }
        default:
            return state;
    }
}
