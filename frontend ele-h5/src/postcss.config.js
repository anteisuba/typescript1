module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ['Android >= 4.0', 'IOS >= 7'],

        },
        'postcss-pxtorem': {
            //根节点的fontSize值
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: [':root'],
        },

    }
}