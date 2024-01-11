import React from 'react'
const Pizza = (props) => {

    if (props.pizzaObj.soldOut) return null;

    return (
        <li className='pizza'>
            {/* <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 3}</span>
            </div> */}
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 3}</span>
            </div>
        </li>
    )
}

export default Pizza