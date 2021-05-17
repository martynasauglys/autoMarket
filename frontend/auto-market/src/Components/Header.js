import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <h2>LOGO</h2>
                    </Link>
                </div>
                <div className="header-nav">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/upload">Įkelti skelbimą</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
