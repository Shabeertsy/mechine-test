import React from 'react'
import UserForm from './UserForm'
import {Link} from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className="navbar-main">
                <div className="navbar-inner">

                    <div className="logo">
                        <Link className="main-logo" to='/'>Home</Link>
                    </div>
                    <div className="routes">
                        <Link className='links' to='/create'>Create user</Link>
                        <Link className='links' to='/users'>Show user</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
