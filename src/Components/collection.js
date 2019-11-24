import React, { useState, useEffect } from 'react';

/*
    Draws a container component for each item in a collection
        data: array or array promise with the props needed for each element
        container: the component to use for each element of data
        containerProps: props to pass to the container

*/
export default function Collection(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Promise.Resolve allows us to handle both promises and actual data
        Promise.resolve(props.data).then((data) => {
            setData(data);
        });
    });

    const Container = props.container;

    return (
        <>
            {
                data.map((element) => {
                    return (
                        <Container {...element} {...props.containerProps} />
                    )
                })
            }
        </>
    )
}