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
        const menus = [
            {
                title: 'November Menu',
                img: 'https://www.tripsavvy.com/thmb/3qPhbjWH8h8dcPZOkxUzk7MhXqY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/montreal-winter-weather-november-nicolas-kipourax-paquet-getty-58dd6f4b3df78c516234e144.jpg',
                id: 0
            },
            {
                title: 'SLC Menu',
                img: 'https://i1.wp.com/www.logoworks.com/blog/wp-content/uploads/2017/06/Untitled-2.png?resize=640%2C360&ssl=1',
                id: 1
            }
        ]
        return menus.filter(menu => {return menu.id === restId});
    },

    getFood: (menuId) => {
        const menuItems = [
            {
                id: 0,
                items: [
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
                items: [
                    {
                        title: 'Steak',
                        price: 20,
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
        ]

        return menuItems.filter(food => {return food.id === menuId}).map(menu => {return menu.items});
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