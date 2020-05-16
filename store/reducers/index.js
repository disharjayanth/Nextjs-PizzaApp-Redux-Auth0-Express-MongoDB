import { combineReducers } from 'redux'
import user from './user_reducer'
import msg from './msg_reducer'
import admin from './admin_reducer'

const rootReducer = combineReducers({
    user: user,
    msg: msg,
    admin: admin
})

export default rootReducer