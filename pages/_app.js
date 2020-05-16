import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import MainLayout from '../components/layouts/MainLayout'

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore, siteData, userAuth, baseUrl } = this.props
        console.log(userAuth)
        return(
            //REDUX STORE is passed as props from withReduxStore HIGHER ORDER COMPONENT  
            <Provider store={reduxStore}>        
                <MainLayout userAuth={userAuth} baseUrl={baseUrl}>
                    <Component {...pageProps} siteData={siteData} userAuth={userAuth} />
                </MainLayout>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)