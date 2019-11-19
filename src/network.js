export const Network = {
    getRestaurants: () => {
        return [
            {
                title: 'E N G',
                img: 'http://www.scs.ryerson.ca/~cscass/database/eng.jpg',
                id: 0
            }
        ]
    },
    getMenus: (restId) => {
        return [
            {
                title: 'November Menu',
                img: 'https://www.tripsavvy.com/thmb/3qPhbjWH8h8dcPZOkxUzk7MhXqY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/montreal-winter-weather-november-nicolas-kipourax-paquet-getty-58dd6f4b3df78c516234e144.jpg',
                id: 0
            }
        ]
    },
    getFood: (menuId) => {
        return [
            {
                title: 'Carrot',
                img: 'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg',
                id: 0
            }
        ]
    }
}