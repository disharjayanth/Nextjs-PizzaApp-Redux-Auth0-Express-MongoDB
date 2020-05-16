import React, { Component } from 'react'
import axios from 'axios'


import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()


class Pizzas extends Component {

    static async getInitialProps({ query }) {
        let pizzaData
        
        try {
            const response = await axios.get(`${publicRuntimeConfig.base_url}/api/v1/pizza/${query.pizzaName}`)
            pizzaData = response.data[0]
        } catch {
            console.error('Error')
        }

        return {
            pizzaData
        }
    }

    render() {
        const {pizzaData} = this.props
        return(
            <>
                <div className="pizza_page">
                    <div 
                    className="top" 
                    style = {{ 
                            background:`url('/static/images/${pizzaData.image}')`
                        }}>
                    </div>
                    <div className="middle">
                        <h1> {pizzaData.name} </h1>
                        <div className="description">
                            {pizzaData.fullDesc}
                        </div>
                        <div className="price">Get it for ${pizzaData.price}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Pizzas