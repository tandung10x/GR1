import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ type }) {
    return (
        <div className='header'>
            <div className={`${type === "search" ? "container header-has-search" : "container"}`}>
                <div className="header-top">
                    <h2><Link to='/'>Homestays system</Link></h2>
                </div>
                {type === "search" && <>
                    <div className="header-center">
                        <p>We give you a lovely welcome, everytime you come back</p>
                    </div>                
                </>}
            </div>
        </div>
    )
}
