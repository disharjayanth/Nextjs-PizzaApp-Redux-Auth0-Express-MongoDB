import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'

const exampleInitialState = {
    user: []
}

export function initializeStore(initialState = exampleInitialState) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(promiseMiddleware))
    )
} 