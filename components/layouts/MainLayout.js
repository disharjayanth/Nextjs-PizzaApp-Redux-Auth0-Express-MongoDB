import React from 'react'
import Header from '../includes/Header'
import Head from 'next/head'

const MainLayout = (props) => {
    return (
        <>
            <Head>
                <title>Pizza Store</title>
                <meta name="keywords" content="pizza,hamburger" />
                <meta name="og:descrition" content="Welcome" />
                <meta property="og:title" content="PizzaStore" />
                <meta property="og:locale" content="es_US" />
                <meta property="og:url" content={`${props.baseUrl}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Good pizza" />

                <link href="https://fonts.googleapis.com/css2?family=Overlock:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" rel="stylesheet"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"></link>
                <link href="/static/css/styles.css" rel="stylesheet"></link>
            </Head>
            <div className="mainLayout_container">
                <Header {...props} />
                <div className="main_container">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default MainLayout