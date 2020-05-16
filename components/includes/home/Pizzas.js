import React from 'react'
import Link from 'next/link'

const Pizzas = (props) => {

    const showList = () => {
        return props.pizzas.map(pizza => {
            if(pizza.pod !== true) {
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
                            <div className="item">
                                <div 
                                className="inner-item"
                                style={{
                                    background: `url('/static/images/${pizza.image}')`
                                }}
                                >
                                    <div className="overlay"></div>
                                    <div className="item-nfo">
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

    return(
        <>
            <div className="pizzas_wrapper">
                <div className="articles">
                   {showList()}
                </div>
            </div>
        </>
    )
}

export default Pizzas