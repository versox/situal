import React from 'react';
import { CardList, Navbar } from '../Components';
import { Network } from '../network';

export default function Kitchen(props) {
    return (
        <div>
            <Navbar title="Pending Orders"/>
            <CardList data={Network.getOrders(0)}/>
        </div>
    );
}