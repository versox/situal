import React from 'react';

import { Network } from '../network'; 
import Navbar from '../navbar';
import Cards from '../cards';

export default function SelectRestaurant() {
    return (
        <div>
            <Navbar title="Choose a restaurant" />
            <Cards data={Network.getRestaurants()} />
        </div>
    );
}