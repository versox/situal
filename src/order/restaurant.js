import React from 'react';

import { Network } from '../network';
import { CardList, Navbar}  from '../Components';

export default function SelectRestaurant() {
    return (
        <div>
            <Navbar title="Choose a restaurant" />
            <CardList dataPromise={Network.getRestaurants()} />
        </div>
    );
}