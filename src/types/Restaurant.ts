export type RestaurantType = {
    id: number,
    name: string,
    description: string,
    image: {
        img: string
        alt: string,
    },
    menu: {
        id: number,
        title: string,
        description: string,
        image: {
            img: string,
            alt: string
        },
        price: number,
        count: number
    },
    reviews: {
        id: number,
        description: string,
        rating: number
    }

}