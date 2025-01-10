module.exports = () => {
    return {
        searchRecomments: [
            {
                value: 0,
                label: 'Naruto'
            },
            {
                value: 1,
                label: 'Pikachu'
            },
            {
                value: 2,
                label: 'Goku'
            },
            {
                value: 3,
                label: 'Sailor Moon'
            }
        ],
        banner: [{
            imgUrl: '/imgs/index_page/transformer-banner.png'
        }
        ],
        transformer: [
            {
                label: 'Astro Boy',
                imgUrl: '/imgs/index_page/transformer-icon1.png'
            },
            {
                label: 'Totoro',
                imgUrl: '/imgs/index_page/transformer-icon2.png'
            },
            {
                label: 'Gundam',
                imgUrl: '/imgs/index_page/transformer-icon3.png'
            },
            {
                label: 'Doraemon',
                imgUrl: '/imgs/index_page/transformer-icon4.png'
            }],
        countdown: {
            time: 24 * 60 * 60 * 1000,
            goods: {
                imgUrl: '/imgs/index_page/count-down-p.png',
                name: 'Attack on Titan Merch',
                price: 19.8,
                oldPrice: 28.9
            }
        },
        activities: [
            '/imgs/index_page/activity/01.png',
            '/imgs/index_page/activity/02.png',
            '/imgs/index_page/activity/03.png'
        ]
    }
}