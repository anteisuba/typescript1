const getHomeSearchData = require('../../data/home_search')

module.exports = (req, res) => {
    try {
        const { _label_like } = req.query
        const allData = getHomeSearchData()

        // 打印初始数据
        console.log('Raw data:', allData)

        if (!allData || !Array.isArray(allData.list)) {
            return res.success({ list: [] })
        }

        const filteredList = allData.list.filter(v =>
            v && v.label && v.label.includes(_label_like || '')
        )

        // 打印过滤后的数据
        console.log('Filtered data:', filteredList)

        // 确保返回的数据结构正确
        const response = {
            list: filteredList.map(item => ({
                type: Number(item.type),
                label: String(item.label),
                resultCount: Number(item.resultCount)
            }))
        }

        // 打印最终返回的数据
        console.log('Response data:', response)

        return res.success(response)
    } catch (error) {
        console.error('Processing error:', error)
        return res.error(error.message)
    }


}