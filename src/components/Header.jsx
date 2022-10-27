import "../style/components/header.css"
import React from "react"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src="/troll-face.png" alt="logo" />
                <h1 className="logo-title">Meme Generator</h1>
            </div>
            <div className="header-description">
                <p className="header-course">
                React Course - Project 3
                </p>
            </div>
        </div>
    )
}

export default Header