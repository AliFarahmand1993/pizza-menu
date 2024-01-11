import React from 'react'

const Footer = () => {
    // const hour = new Date();
    // const currentDateTime = hour.toLocaleString();
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
            {isOpen && (
                <div className='order'>
                    <p>We're open until {closeHour}:00 come visit us or order online</p>
                    <button className='btn'>Order</button>
                </div>
            )}
        </footer>
    )
}

export default Footer