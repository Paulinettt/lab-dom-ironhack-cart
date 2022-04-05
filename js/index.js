// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span")

  const quantity = product.querySelector(".quantity input")

  const subtotal = product.querySelector(".subtotal span")

  const priceNumber = parseFloat (price.innerText)
  const quantityNumber = parseFloat(quantity.value)

  const subtotalNumber = priceNumber * quantityNumber

  subtotal.innerText = subtotalNumber


  return subtotalNumber
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 //updateSubtotal(singleProduct);
  
  let totalSum = 0;

   const products = document.querySelectorAll(".product");

    products.forEach(function (element) {
      
      totalSum += updateSubtotal (element)   
   })
    return totalSum;

   const newElm = document.getElementById("total-value span");
   newElm.innerText = totalSum

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
