import React from 'react';

export default function FoodItem(props) {
    return (
        <div class="uk-grid" key={props.id}>
            <span class="uk-text-large uk-text-center uk-width-2-3">
                {props.title}
            </span>
            {props.itemButton ? <button onClick={() => props.onSelectItem({
                id: props.id,
                title: props.title,
                price: props.price
            })} class="uk-button uk-button-primary">Add to order</button> : ''}
            {"$" + props.price.toFixed(2)}
        </div>
    )
}