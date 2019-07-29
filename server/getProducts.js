const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    //this if statement is filtering through data and returning the items with equal/higher
    // price(val) than the val in query

    const items = products.filter(
      val => val.price >= parseInt(req.query.price)
    );
    return res.status(200).send(items);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
