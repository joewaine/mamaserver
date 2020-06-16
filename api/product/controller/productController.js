const Product = require("../model/Product");

exports.addProduct = async (req, res) => {

console.log(req.body)

    try {
        const product = new Product({
          name: req.body.name,
          price: req.body.price,
        });
        let data = await product.save();
        res.status(201).json({ data });
      } catch (err) {
        res.status(400).json({ err: err });
      }
};

exports.deleteProduct = async (req, res) => {
  const message = await Product
   .findByIdAndRemove(req.params.id)
   .then(() => 'List deleted');
 
  res.json({ message });
 }


exports.getProducts = async (req, res) => {
  try {

      const products = await Product.find({})
      // console.log(products)
      res.status(201).json({ products });

    } catch (err) {
     res.status(400).json({ err: err });
   }
 };
 

//  exports.snipCartProducts = async (req, res) => {
//   try {

//       // const products = await Product.find({})
//       // // console.log(products)
//       // res.status(201).json({ products });

// console.log('snipcart products')

//     } catch (err) {
//      res.status(400).json({ err: err });
//    }
//  };
 

exports.snipCartProducts = async function (event, context, callback) {


  const response = await fetch(
    'https://app.snipcart.com/api/products', {
    method: 'GET',
    headers: {
      Accept:	'application/json',
      Authorization: 'Bearer ST_ZTBmZWRlMjAtMjBlOC00OGU5LWJlMTItZmIwMTNiZDc2Mzc0NjM3MjczNDc1MDcxNTcyODk5',
      
    }
  });
  console.log(response)

  if (response.ok) {
    const body = await response.json();


console.log(body)
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({ ok: true, returnUrl: body.returnUrl })
    // };
  }
}










