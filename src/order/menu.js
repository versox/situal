import React from 'react';

import { Network } from '../network'; 
import Navbar from '../navbar';
import Cards from '../cards';

export default function SelectMenu(props) {
    const restId = props.match.params.restId;
    return (
        <div>
            <Navbar title="Choose a menu" />
            <Cards data={Network.getMenus(restId)} />
        </div>
    )
}