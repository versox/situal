import React, { useState } from 'react';
import { List, Navbar, Collection } from '../Components';
import { Network } from '../network';
import FoodItem from './foodItem';

export default function OrderFood(props) {
    const menuId = parseInt(props.match.params.menuId);
    const [order, setOrder] = useState([]);
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
            <div class="uk-margin-top uk-container uk-container-center uk-width-small">
                <ul class="uk-list uk-list-striped">
                    <Collection data={Network.getFood(menuId)} container={FoodItem} containerProps={
                        {
                            onSelectItem: onClick,
                            itemButton: true
                        }
                    } />
                </ul>
            </div>
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
                    <Collection data={order} container={FoodItem} />
                </ul>
            </div>
            <div class="uk-container uk-container-center">
                <button class="uk-button uk-button-primary uk-width-1-1">Place Order</button>
            </div>
        </div>
    );
}