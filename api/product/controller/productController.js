const Product = require("../model/Product");
const fetch = require("node-fetch");
const btoa = require('btoa');


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
 

// exports.snipCartProducts = async function (event, context, callback) {


//   const response = await fetch(
//     'https://app.snipcart.com/api/products', {
//     method: 'GET',
//     headers: {
//       Accept:	'application/json',
//       Authorization: 'Bearer ST_ZTBmZWRlMjAtMjBlOC00OGU5LWJlMTItZmIwMTNiZDc2Mzc0NjM3MjczNDc1MDcxNTcyODk5',
      
//     }
//   });
//   console.log(response)

//   if (response.ok) {
//     const body = await response.json();


// console.log(body)
//     // return {
//     //   statusCode: 200,
//     //   body: JSON.stringify({ ok: true, returnUrl: body.returnUrl })
//     // };
//   }
// }






exports.snipCartProducts = async function (req,res) {


console.log(1234876545678765)

  const secret = "S_OTY0NzY5YjEtYjAxNy00YWNiLTkzMDAtNWMxYjQ3YjQ5YmY0NjM3MjgxMTUxMjMyMDY3ODE2"






try {



  const request = await fetch('https://app.snipcart.com/api/products', {
      headers: {
          'Authorization': `Basic ${btoa(secret)}`,
          'Accept': 'application/json'
      }
  })
  
  
  if (request.ok) {
    const body = await request.json();
    res.status(201).json({ body });
    // console.log(body)
  }
// console.log('success');

} catch (err) {
 res.status(400).json({ err: err });

 console.log('failure');
}



  // const secret = "S_OTY0NzY5YjEtYjAxNy00YWNiLTkzMDAtNWMxYjQ3YjQ5YmY0NjM3MjgxMTUxMjMyMDY3ODE2"
  // const secret = "ST_ZTBmZWRlMjAtMjBlOC00OGU5LWJlMTItZmIwMTNiZDc2Mzc0NjM3MjczNDc1MDcxNTcyODk5"
  // const secret = "ZWMzNjdjM2MtOTQyNi00MjU2LTgwZjMtMzlhNmFiZDMwNDBlNjM3MjYyOTQ3OTQ3OTcxNTA1"
  
  
  // const request = await fetch('https://app.snipcart.com/api/products', {
  //     headers: {
  //         'Authorization': `Basic ${btoa(secret)}`,
  //         'Accept': 'application/json'
  //     }
  // })
  
  
  // if (request.ok) {
  //   const body = await request.json();
  // // console.log(body)
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify( body )
  //   };
  // }
  
  // const result = await request.json()
  // console.log(result)
  }
  
  // getProducts()





