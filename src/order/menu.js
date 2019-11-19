import React from 'react';

import { Network } from '../network';
import { Card, CardList, Navbar } from '../Components';

export default function SelectMenu(props) {
    const restId = parseInt(props.match.params.restId);
    return (
        <div>
            <Navbar title="Choose a menu" />
            {Network.getMenus(restId).length
                ? <CardList data={Network.getMenus(restId)} />
                : <Card title="Please check back later" link=""/>
            }
        </div>
    )
}