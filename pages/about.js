import React, { Component } from 'react'

class About extends Component {
    render() {
        const {siteData} = this.props
        return (
            <>
                <div className="title_page">
                    <h1>About Us</h1>
                </div>
                <div className="content_wrapper">
                    <div className="inner">
                        <h1>Pizzaria is awesome!</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div className="middle">
                        <div className="inner_middle">
                            
                            <div className="item two_c">
                                <div className="wrapp">
                                    <div 
                                    className="top"
                                    style={{
                                        background:`url('/static/images/chef.jpg')`
                                    }}
                                    >
                                    </div>
                                    <div className="bottom">
                                        <h2>Our Chefs</h2>
                                        <h3>Pizzaria</h3>
                                        <br />
                                        <p>
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus animi vero, odio, recusandae iusto sequi ullam consequuntur quo placeat praesentium soluta odit, tenetur illo ad provident itaque quisquam culpa!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="item two_c">
                            <div className="wrapp">
                                    <div 
                                    className="top"
                                    style={{
                                        background:`url('/static/images/store.jpg')`
                                    }}
                                    >
                                    </div>
                                    <div className="bottom">
                                        <h2>Our Store</h2>
                                        <h3>Pizzaria</h3>
                                        <br />
                                        <p>
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repellendus animi vero, odio, recusandae iusto sequi ullam consequuntur quo placeat praesentium soluta odit, tenetur illo ad provident itaque quisquam culpa!
                                        </p>
                                        <div>
                                            <div>Phone: {siteData.phone} </div>
                                            <div>Email: {siteData.email} </div>
                                            <div>Address: {siteData.address} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About