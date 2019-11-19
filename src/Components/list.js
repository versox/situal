import React from 'react';

export default function List(props) {
    return (
        <div class="uk-margin-top uk-container uk-container-center uk-width-small">
            <ul class="uk-list uk-list-striped">
                <li>
                    <ListItem items={props.items} onSelectItem={props.onSelectItem} itemButton={props.itemButton}/>
                </li>
            </ul>
        </div>
    );
}

function ListItem(props) {
    return (
        <>
            {props.items.map((item,idx) => (
                <div class="uk-grid" key={idx}>
                    <span class="uk-text-large uk-text-center uk-width-2-3">
                        {item.name}
                    </span>
                    {props.itemButton ? <button onClick={() => props.onSelectItem(item)} class="uk-button uk-button-primary uk-width-1-3">Add to order</button> : "$" + item.price}
                </div>
            ))}
        </>
    )
}