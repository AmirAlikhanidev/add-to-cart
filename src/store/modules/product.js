const product = {
    namespaced: true,

    state: {
        products: [{
                id: 1,
                name: "Samsung Galaxy S20",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 300,
            },

            {
                id: 2,
                name: "iPhone 12",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 500,
            },

            {
                id: 3,
                name: "Redmi Note 8",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 600,
            },

            {
                id: 4,
                name: "Samsung Galaxy A71",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 700,
            },
            {
                id: 5,
                name: "Galaxy A51",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/68422acfce0c786a697a6ba933a9d7e196e3472a_1609745416.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 900,
            },
            {
                id: 6,
                name: "Apple Airpad",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/580c5c3df760270fa3ae8888621a54fe3847d46d_1618379530.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
                price: 200,
            },
            {
                id: 7,
                name: "Redmi 9T",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/aaca3bd321f26381a5ba5fa197deac0ca46a3c7a_1624091900.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 1000,
            },
            {
                id: 7,
                name: "Redmi Note 8",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                image: "https://dkstatics-public.digikala.com/digikala-products/2ed7e75584cd3c7ae16d2157da5b79898044b8bf_1631712171.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                price: 1000,
            },
        ]
    },
    getters: {
        allProducts(state) {
            return state.products
        }
    }
}

export default product;