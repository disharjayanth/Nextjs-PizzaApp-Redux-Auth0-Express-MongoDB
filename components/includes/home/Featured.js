import React from 'react'
import Link from 'next/link'

const Featured = (props) => {

    const showFeatured = () => {
        return props.pizzas.map(pizza => {
            if(pizza.pod === true) {
                return (
                    <Link 
                    key={pizza.idName} 
                    as={`/pizzas/${pizza.idName}`} //masking the url in browser history
                    href={{
                        pathname: `/pizzas`, //this is the actual url interpreted as http://pizzastore.com/pizzas?pizzaId=1
                        query: {
                            pizzaName: pizza.idName 
                        }
                    }}
                    >
                        <a>
                            <div className="featured_container"
                            style={{ 
                                background: `url('/static/images/${pizza.image}')`
                            }}
                            >
                            <div className="overlay"></div>
                            <div className="info">
                                <div className="top">
                                    <h2>Pizza of the day</h2>
                                </div>
                                <div className="description">
                                    <h3>{pizza.name}</h3>
                                    <p>
                                    {pizza.shortDesc}
                                    </p>
                                </div>
                            </div>
                            </div>
                        </a>
                    </Link>
                )
            }
        })
    }

    return showFeatured()
}

export default Featured