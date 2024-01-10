import React from 'react'

const Footer = () => {
    const hour = new Date();
    const currentDateTime = hour.toLocaleString();

    return (
        <div>{currentDateTime}</div>
    )
}

export default Footer