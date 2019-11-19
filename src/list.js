import React from 'react';

export default function List(props) {
    return (
        <div class="uk-margin-top uk-container uk-container-center uk-width-small">
            <ul class="uk-list uk-list-striped">
                <li>
                    <ListItem />
                </li>
            </ul>
        </div>
    );
}

function ListItem(props) {
    return (
        <div class="uk-grid">
            <span class="uk-text-large uk-text-center uk-width-2-3">
                Carrot
            </span>
            <button class="uk-button uk-button-primary uk-width-1-3">Add to order</button>
        </div>
    )
}