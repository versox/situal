import React, { useState } from 'react';
import { List, Navbar } from '../Components';

export default function OrderFood(props) {
    // const menuId = props.match.params.menuId;
    const [order,setOrder] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const menuItems = [
        {name: 'Carrot', price: 12},
        {name: 'Steak', price: 20},
        {name: 'Eggs', price: 2.50},
        {name: 'Fish', price: 15}
    ]

    function onClick(selection) {
        setOrder(order => [...order, selection]);
        setSubtotal(subtotal + selection.price);
    }

    return (
        <div>
            <Navbar title="Time to order!" />
            <List items={menuItems} onSelectItem={onClick} itemButton/>
            <List items={order} itemButton={false}/>
            <h1>Subtotal: ${subtotal} </h1>
            <button class="uk-button uk-button-primary uk-width-1-3">Place Order</button>
        </div>
    );
}