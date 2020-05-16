import React, { Component } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import authRoute from '../../components/HOC/authRoute'

import { connect } from 'react-redux'
import { UpdateSite } from '../../store/action'

class AdminSite extends Component {
    constructor(props) {
        super(props)
        
        const { siteData: { address, email, phone} } = props

        this.state = {
            address: address ,
            email: email ,
            phone: phone ,
            update: false
        }
    }

    handleSubmit =(e) =>{
        event.preventDefault();
        this.props.dispatch(UpdateSite(this.state)).then(()=>{
            if(this.props.admin.site.update){
                this.setState({update:true})
                setTimeout(()=>{
                    this.setState({update:false})
                },2000)
            }
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    render() {
        const form = this.state
        return(
            <AdminLayout sectionName="Site Data">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Address</label>
                        <input 
                            type="text"
                            className="form-control"
                            onChange={(e) => this.handleAddress(e)}
                            value={form.address}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text"
                            className="form-control"
                            onChange={(e) => this.handleEmail(e)}
                            value={form.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="text"
                            className="form-control"
                            onChange={(e) => this.handlePhone(e)}
                            value={form.phone}
                        />
                    </div>

                    <button className="btn btn-primary" type="submit">Submit</button>

                    {
                        form.update 
                        ?
                        <div className="update">
                            Updated
                        </div>
                        :
                        null
                    }

                </form>
            </AdminLayout>
        )
    }
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps)(authRoute(AdminSite))