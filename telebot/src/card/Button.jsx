
import React from 'react'
import './button.css'
export default function Button(props) {
    const { type, title, onClick, disable } = props
    return (
        <div className={`btn ${(type === "add" && "add") ||
            (type === "remove" && "remove") ||
            (type === "checkout" && "checkout")
            } ${disable === true && 'disabled'}`}
            onClick={onClick}
            disabled={disable}
        >
            {title}
        </div>
    )
}

