import React from 'react';

import Navbar from '../navbar';
import List from '../list';

export default function OrderFood(props) {
    const menuId = props.match.params.menuId;
    return (
        <div>
            <Navbar title="Time to order!" />
            <List/>
        </div>
    );
}