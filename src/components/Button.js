import React from 'react'

export default function Button({ action, onClick }) {
    return (
        <button onClick={onClick}>{action}</button>
    )
}
