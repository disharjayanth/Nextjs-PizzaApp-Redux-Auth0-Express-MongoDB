import React, { Component } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import authRoute from '../../components/HOC/authRoute'

class Admin extends Component {
    render() {
        return (
            <AdminLayout sectionName="Dashboard">
            <h4>Welcome to Dashboard</h4>
            </AdminLayout>
        )
    }
}

export default authRoute(Admin)