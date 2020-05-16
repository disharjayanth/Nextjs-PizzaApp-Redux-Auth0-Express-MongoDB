import React, { Component } from 'react'
import MainLayout from '../components/layouts/MainLayout'

import auth0Serv from '../lib/appAuth'

import Router from 'next/router'

class LoginSuccess extends Component {
    state = {
        error: false
    }

    componentDidMount() {
        auth0Serv.handleAuthentication().then(() => {
            Router.push('/admin')
        }).catch((err) => {
            this.setState({ 
            error: true 
            })
        })
    }

    render() {
        return(
            <>
                {!this.state.error
                ?
                <div>
                    Signing In.....
                </div>
                :
                <div>Sorry Something went wrong!</div>
                }
            </>
        )
    }
}

export default LoginSuccess