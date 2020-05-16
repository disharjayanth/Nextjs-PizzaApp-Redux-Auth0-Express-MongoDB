import React from 'react'
import Link from 'next/link'
import auth0Serv from '../../lib/appAuth'

const Header = (props) => {
    return(
        <>
        <header>
            <div className="wrapper">
                <div className="top_nav">
                    <Link href='/'>
                        <a className="logo">
                            <img src="/static/images/pizzaria_logo.png" alt="logo" />
                        </a>
                    </Link>
                </div>

                <div className="nav_section">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        <i className="fas fa-pizza-slice"></i>
                                        <span>Our Pizzas</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a>
                                        <i className="fas fa-store"></i>
                                        <span>About Us</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a>
                                        <i className="fas fa-map"></i>
                                        <span>Contact</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {props.userAuth ?
                <div className="user_actions">

                    <Link href="/admin">
                        <a>
                            <span>
                                Dashboard
                            </span>
                        </a>
                    </Link>

                <div className="logout_btn"
                    onClick={() => auth0Serv.logout()}
                >
                    <span>
                        Logout
                    </span>
                </div>
                </div>  
                :
                <div 
                className="login_btn"
                onClick={() => auth0Serv.login()}
                >
                <span>User Area</span>
                </div>
                }
            </div>
        </header>
        </>
    )
}

export default Header