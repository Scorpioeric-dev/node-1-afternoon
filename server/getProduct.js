const products = require('../products.json')


const getProduct = (req,res) => {
    // return specific item once found otherwise, undefined
    //the const of item is finding the specific id of the product or otherwise returning null the parse int is converting the str into a number
    const item = products.find(val => val.id === +(req.params.id))
    if (!item){
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(item)
}






module.exports = getProduct