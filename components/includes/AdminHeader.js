import React from 'react'
import Link from 'next/link'

const AdminHeader = (props) => {
    return(
        <div className="admin_header">
            <div className="admin_nav">
                <ul>
                    <li>
                        <Link href='/admin'>
                            <a>
                                <span>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/admin/site'>
                            <a>
                                <span>Site</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/admin/messages'>
                            <a>
                                <span>Messages</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <h1>{props.sectionName}</h1>
        </div>
    )
}

export default AdminHeader