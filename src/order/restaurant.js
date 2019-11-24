import React from 'react';

import { Network } from '../network';
import { Card, Collection, Navbar }  from '../Components';

export default function SelectRestaurant() {
    return (
        <div>
            <Navbar title="Choose a restaurant" />
            <div class="uk-container uk-margin-top">
                <div class="uk-grid">
                    <Collection data={Network.getRestaurants()} container={Card}/>
                </div>
            </div>
        </div>
    );
}