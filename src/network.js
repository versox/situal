function getData(url) {
    return new Promise((resolve, reject) => {
        const connRequest = new XMLHttpRequest();
        connRequest.addEventListener('load', () => {
            resolve(JSON.parse(connRequest.response));
        });
        connRequest.open('GET', url);
        connRequest.send();
    });
}


export const Network = {
    getRestaurants: () => {
        return getData('http://localhost:8080/restaurants');
    },
    getMenus: (restId) => {
        return getData('http://localhost:8080/menus?id=' + restId);
    },

    getFood: (menuId) => {
        return getData('http://localhost:8080/food?id=' + menuId);
    },

    getOrders: (restaurantId) => {
        return [
            {
                id: 0,
                title: 'order #1',
                listItems: [
                    {
                        title: 'Carrot',
                        price: 4,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Steak',
                        price: 20,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Fish',
                        price: 15.50,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Soup',
                        price: 9.99,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Cake',
                        price: 15,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
               ]
            },
            {
                id: 1,
                title: 'order #2',
                listItems: [
                    {
                        title: 'Steak',
                        price: 20,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Carrot',
                        price: 4,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Fish',
                        price: 15.50,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Cake',
                        price: 15,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                ]
            },
            {
                id: 2,
                title: 'order #3',
                listItems: [
                    {
                        title: 'Steak',
                        price: 20,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                    {
                        title: 'Carrot',
                        price: 4,
                        img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                        id: 0
                    },
                ]
            }
        ]
    }
}