const products = require("../products.json");

const getProducts = (req, res) => {
console.log('hey')  //The backend requires syntax that defines your query as that (query) the front end uses the ? exa. ? name = sombra
  if (req.query.price) {
    //this if statement is filtering through data and returning the items with equal/higher
    // price(val) than the val in query

    const items = products.filter(
      //The filter is going through the data
      ele => ele.price >= +req.query.price
    );
    return res.status(200).send(items);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
