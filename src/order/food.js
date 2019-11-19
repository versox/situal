import React, { useState } from 'react';
import { List, Navbar } from '../Components';
import { Network } from '../network';

export default function OrderFood(props) {
    // const menuId = props.match.params.menuId;
    const [order,setOrder] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    function onClick(selection) {
        setOrder(order => [...order, selection]);
        setSubtotal(subtotal + selection.price);
    }
    function clearOrder() {
        setOrder([]);
        setSubtotal(0);
    }

    return (
        <div>
            <Navbar title="Time to order!" />
            <List items={Network.getFood(0)} onSelectItem={onClick} itemButton/>
            <List items={order} itemButton={false}/>
            <div class="uk-margin-top uk-container uk-container-center uk-width-small">
                <ul class="uk-list uk-list-striped">
                    <li>
                        <div class="uk-grid">
                            <span class="uk-text-large uk-text-center uk-width-2-3">
                                <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
                            </span>
                            <button class="uk-button uk-button-primary uk-width-1-3" onClick = {() => clearOrder()}>Clear Order</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="uk-container uk-container-center">
                <button class="uk-button uk-button-primary uk-width-1-1">Place Order</button>
            </div>
        </div>
    );
}