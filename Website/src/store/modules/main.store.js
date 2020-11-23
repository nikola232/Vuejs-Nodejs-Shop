export default {
    state: {
        category: '',
        checkedModel: [],
        // minPrice: void 0,
        // maxPrice: void 0,
        getWatchesMongoDb: [],
        // watches: [
        //     { id: 1, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 2, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 3, name: 'Smart', price: 1290, quantity: '223', type: 'Смарт Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen2.png')},
        //     { id: 4, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 5, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 6, name: 'Omega', price: 500, quantity: '253', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 7, name: 'Smart', price: 1290, quantity: '223', type: 'Смарт Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen2.png')},
        //     { id: 8, name: 'Bremont', price: 3510, quantity: '23', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 9, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 10, name: 'Smart', price: 1290, quantity: '223', type: 'Смарт Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen2.png')},
        //     { id: 11, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 12, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 13, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 14, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 15, name: 'Omega', price: 500, quantity: '253', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 16, name: 'Smart', price: 1290, quantity: '223', type: 'Смарт Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen2.png')},
        //     { id: 17, name: 'Smart', price: 1290, quantity: '223', type: 'Смарт Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen2.png')},
        //     { id: 18, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 19, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 20, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 21, name: 'Rolex', price: 1290, quantity: '223', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 22, name: 'Smart', price: 1290, quantity: '223', type: 'Смарт Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen2.png')},
        //     { id: 23, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 24, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 25, name: 'Omega', price: 500, quantity: '253', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 26, name: 'Bremont', price: 3510, quantity: '23', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 27, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 28, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 29, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 30, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 31, name: 'Omega', price: 500, quantity: '253', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 32, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 33, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 34, name: 'Rolex', price: 1290, quantity: '223', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 35, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 36, name: 'Omega', price: 500, quantity: '253', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 37, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 38, name: 'Bremont', price: 3510, quantity: '23', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 39, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 40, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 41, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 42, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 43, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 44, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 45, name: 'Omega', price: 500, quantity: '253', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 46, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 47, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 48, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 49, name: 'Rolex', price: 1290, quantity: '223', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 50, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 51, name: 'Omega', price: 500, quantity: '253', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 52, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 10, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 53, name: 'Bremont', price: 3510, quantity: '23', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 54, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 55, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 56, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 2, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 57, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 58, name: 'Omega', price: 500, quantity: '253', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 59, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 110, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 60, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 61, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 62, name: 'Rolex', price: 1290, quantity: '223', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 63, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Машки Часовник', counter: 10, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 64, name: 'Omega', price: 500, quantity: '253', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 65, name: 'Bremont', price: 3510, quantity: '23', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 66, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 67, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 68, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 69, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 70, name: 'Omega', price: 500, quantity: '253', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 71, name: 'Bremont', price: 3510, quantity: '23', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 72, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 73, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 74, name: 'Rolex', price: 1290, quantity: '223', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 75, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Машки Часовник', counter: 10, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 76, name: 'Omega', price: 500, quantity: '253', type: 'Машки Часовник', counter: 1111, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 77, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 78, name: 'Bremont', price: 3510, quantity: '23', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 79, name: 'Louis Moinet', price: 650, quantity: '543', type: 'Машки Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen3.png')},
        //     { id: 80, name: 'Vacheron Constantin', price: 2500, quantity: '53', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 81, name: 'Rolex', price: 1290, quantity: '223', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 82, name: 'Audemars Piguet', price: 14500, quantity: '352', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')},
        //     { id: 83, name: 'Omega', price: 500, quantity: '253', type: 'Женски Часовник', counter: 0, img: require('../../assets/carouselWomenAndMen1.png')}
        // ],
        watches: [
            { 
                id: 0, 
                name: 'Curren',
                price: 120,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 0,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 3,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 1, 
                name: 'Curren',
                price: 11200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 2, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 3, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 4, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 5, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 6, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 7, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 9, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 10, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 11, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 12, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 13, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 14, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 15, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Женски Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            },
            { 
                id: 15, 
                name: 'Curren',
                price: 1200,
                quantity: '12',
                type: 'Машки Часовник',
                counter: 0,
                description: {
                    desc: "This fashionable men's business watch boasts a stainless steel or leather strap that makes for comfortable wearing. This item goes perfectly with all styles and is the perfect gift for your boyfriend or father. The watch has a water resistance mark of 30 M. This means it can withstand small splashes but can't be washed or worn when bathing, swimming, or diving.",
                    dial: {
                        shape: "Round",
                        movementType: "Quartz",
                        displayType: "Pointer",
                        pointerColor: "Silver",
                        dialColor: "Black, White, Brown, Blue"
                    },
                    band: {
                        material: "Round",
                        claspType: "Quartz",
                        bandColor: "Pointer",
                    },
                    watch: {
                        length: "approx. 240 mm",
                        dialDiameter: "approx. 40.5 mm",
                        dialThickness: "approx. 9 mm",
                        weight: "approx. 90 g",
                    }
                },
                mainImg: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                optionsImgs: [
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_1.png'),
                        color: 'White'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_2.png'),
                        color: 'Blue'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_3.png'),
                        color: 'Brown'
                    },
                    {
                        quantity: 4,
                        img: require('../../assets/FroProductPage/curren-watch1/Screenshot_4.png'),
                        color: 'Black'
                    }
                ],
                descImgs: [require('../../assets/FroProductPage/curren-watch1-desc/Screenshot_1.png')]
            }
        ],
        productsForBuying: [
        ],
        productsFromWishList: [
        ]
},
    getters: {
        getWatchesMongoDb: state => {
            return state.getWatchesMongoDb
        },
        productCategory: state => {
            return state.category
        },
        productModel: state => {
            return state.checkedModel
        },
        productMinPrice: state => {
            return state.minPrice
        },
        productMaxPrice: state => {
            return state.maxPrice
        },
        getItemList: state => {
            return state.categories.map(category => category.items.map(item => item.itemList).flat()).flat()
        },
        getWatches: state => {
            return state.watches
        },
        getProductsForBuying: state => {
            return state.productsForBuying
        },
        getProductsFromWishList: state => {
            return state.productsFromWishList
        }
    },
    mutations: {
        getWatchesMongoDb (state, payload) {
            state.getWatchesMongoDb = payload
        },
        setCategory (state, payload) {
            state.category = payload
        },
        setCheckedModel(state, payload) {
            state.checkedModel = payload
        },
        // setMinAndMaxPrice(state, payload) {
        //     state.minPrice = payload.minPrice
        //     state.maxPrice = payload.maxPrice
        // },
        setProductsFromWishList (state, payload) {
            state.productsForBuying = payload
        },
        setProductToWishList(state, payload) {
            state.productsFromWishList.push(payload)
        },
        setProduct(state, payload) {
            state.productsForBuying = []
            state.productsForBuying.push(payload)
        }
    },
    actions: {
        async getWatches (context) {
            const response = await fetch('http://localhost:5000/api/watches', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            if (response.ok) {
                let data = await response.json()
                console.log('sss', data)
                context.commit('getWatchesMongoDb', data)
            }
        },

        async setWatch (context, payload) {
            console.log('State pay', payload.watch)
            const response = await fetch('http://localhost:5000/api/watches', {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload.watch)
              });
              return response.json();
        },

        async loginAdmin (context, payload) {
            console.log('State pay', payload.user)
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload.user)
              });
              return response.json();
        },

        setCategory(context, payload) {
            context.commit('setCategory', payload)
        },
        setCheckedModel(context, payload) {
            context.commit('setCheckedModel', payload)
        },
        // setMinAndMaxPrice(context, payload) {
        //     console.log(payload, 'min max')
        //     context.commit('setMinAndMaxPrice', payload)
        // },
        setProductsFromWishList(context, payload) {
            context.commit('setProductsFromWishList', payload)
        },
        setProductToWishList(context, payload) {
            context.commit('setProductToWishList', payload)
        },
        setProduct(context, payload) {
            console.log('setProduct state', payload)
            context.commit('setProduct', payload)
        }
    }    
}