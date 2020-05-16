import React, { Component } from 'react'
import axios from 'axios'
import Featured from '../components/includes/home/Featured'
import Pizzas from '../components/includes/home/Pizzas'


import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


class Home extends Component {
    static async getInitialProps() {
        let pizzasData

        try {
            const response = await axios.get(`${publicRuntimeConfig.base_url}/api/v1/pizza`)
            pizzasData = response.data 
        }catch {
            console.error('Error')
        }

        return {
            pizzasData
        }
    }

    render() {
        const { pizzasData } = this.props
        return (
            <>
                <Featured pizzas={pizzasData} />
                <Pizzas pizzas={pizzasData}/>
            </>
        )
    }
}

export default Home