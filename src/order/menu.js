import React from 'react';

import { Network } from '../network';
import { CardList, Navbar } from '../Components';

export default function SelectMenu(props) {
    const restId = parseInt(props.match.params.restId);
    return (
        <div>
            <Navbar title="Choose a menu" />
            <CardList data={Network.getMenus(restId)} />
        </div>
    )
}