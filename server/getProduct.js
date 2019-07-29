const products = require('../products.json')


const getProduct = (req,res) => {
    // return specific item once found otherwise, undefined
    const item = products.find(val => val.id === parseInt(req.params.id))
    if (!item){
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(item)
}






module.exports = getProduct