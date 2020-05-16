import React, { Component } from 'react';
import axios from 'axios';
import authRoute from '../../components/HOC/authRoute';
import AdminLayout from '../../components/layouts/AdminLayout'

import { getCookies } from '../../lib/utils';

import { connect } from 'react-redux';
import { DeleteMessage } from '../../store/action';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


class AdminMessages extends Component {
    static async getInitialProps({req}){
        let messagesData;
        let reqCook = getCookies(req);

        try {
             const response = await axios.get(`${publicRuntimeConfig.base_url}/api/v1/messages`,{
                 headers:{
                     'authorization':`Bearer ${reqCook}`
                 }
             });
             messagesData = response.data;
        } catch (error){
            console.log(error)
        }

        return {
            messagesData
        }
    }


    constructor(props){
        super(props);

        this.state = {
            messages: this.props.messagesData
        }
    }

    deleteMsgHandler = (_id) => {
        this.props.dispatch(DeleteMessage(_id)).then(()=>{
            this.setState({
                messages: this.props.msg.messages
            })
        })
    }

    showMessages = (messages) => (
        messages ?
            messages.map((message)=>(
                <div className="item" key={message._id}>
                    <div className="delete_btn" onClick={ () => this.deleteMsgHandler(message._id)}>
                        X
                    </div>
                    <div className="tag"><span>Name:</span>{message.name}</div>
                    <div className="tag"><span>Email:</span>{message.email}</div>
                    <div className="msg_wrap">
                        <div className="tag"><span>Message:</span></div>
                        <div>
                            {message.message}
                        </div>
                    </div>
                </div>
            ))
        :null
    )


    render(){
        return(
            <AdminLayout
                sectionName="Message"
            >
                <div className="messages_container">
                    { this.showMessages(this.state.messages)}
                </div>
            </AdminLayout>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        msg: state.msg
    }
}

export default connect(mapStateToProps)(authRoute(AdminMessages));