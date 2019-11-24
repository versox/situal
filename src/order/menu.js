import React from 'react';

import { Network } from '../network';
import { Card, Collection, Navbar } from '../Components';

export default function SelectMenu(props) {
    const restId = parseInt(props.match.params.restId);
    return (
        <div>
            <Navbar title="Choose a menu" />
            <div class="uk-container uk-margin-top">
                <div class="uk-grid">
                    <Collection data={Network.getMenus(restId)} container={Card}/>
                </div>
            </div>
        </div>
    )
}