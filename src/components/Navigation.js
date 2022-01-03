import React from 'react'
import {
Link
} from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul className="header-nav">
                <li><Link className="nav-item" to="/">Home</Link></li>
                <li><Link className="nav-item" to="/results">The Results</Link></li>
                <li><Link className="nav-item" to="/categories">Categories</Link></li>
                <li><Link className="nav-item" to="/judges">Judges</Link></li>
                <li><Link className="nav-item" to="/earned-their-wings">Earned Their Wings</Link></li>
            </ul>
        </nav>
    )
}
