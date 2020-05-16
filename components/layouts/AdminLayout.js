import React from 'react'
import AdminHeader from '../includes/AdminHeader'

const AdminLayout = (props) => {
    return(
        <div className="admin_layout">
            <AdminHeader {...props} />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default AdminLayout