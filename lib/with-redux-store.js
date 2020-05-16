import React from 'react'
import axios from 'axios'
import { initializeStore } from '../store'

import auth0Serv from '../lib/appAuth'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STATE__ = '__NEXT_REDUX_STATE__'

function getOrCreateStore(initialState) {

    if(isServer) {
        return initializeStore(initialState)
    }

    if(!window[__NEXT_REDUX_STATE__]) {
        window[__NEXT_REDUX_STATE__] = initializeStore(initialState)
    }
    return window[__NEXT_REDUX_STATE__]
}

export default (App) => {
    return class AppWithRedux extends React.Component {

        static async getInitialProps(appContext) {
            let siteData
            let userAuth
            let baseUrl = publicRuntimeConfig.base_url
            const reduxStore = getOrCreateStore()

            appContext.ctx.reduxStore = reduxStore

            let appProps = {}
            if(typeof App.getInitialProps === 'function') {
                appProps = await App.getInitialProps(appContext)
            }

            try{
                const response = await axios.get(`${publicRuntimeConfig.base_url}/api/v1/site`)
                siteData = response.data[0]
            }catch {
                console.log('Error')
            }

            userAuth = await auth0Serv.isAuthenticated(appContext.ctx.req)

            return {
                ...appProps,
                siteData,
                userAuth,
                baseUrl,
                initialReduxStore: reduxStore.getState()
            }
        }

        constructor(props) {
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxStore)
        }

        render() {
            return <App {...this.props} reduxStore={this.reduxStore} />
        }
    }
} 