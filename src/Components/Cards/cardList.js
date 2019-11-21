import React, { useState, useEffect } from 'react';

import Card from './card';

export default function CardList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        props.dataPromise.then(
            (data) => {
                setData(data);
            },
            () => {
                console.log('reject');
            }
        );
    });

    const cards = [];
    data.forEach(element => {
        cards.push(
            <Card title={element.title} img={element.img} link={element.id} listItems={element.listItems}/>
        );
    });

    return (
        <div class="uk-container uk-margin-top">
            <div class="uk-grid">
                {cards}
            </div>
        </div>
    )
}