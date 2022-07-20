// #region SECTION MORNING NOTES
// function oddEven(num){
//   if(num % 2 == 0){
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }


// function evenOrOdd(num){
//   return num % 2 == 0 ? "even":"odd"
//   return n % 2 ? 'odd' : 'even'
  // empty string is falsey "" but even a space in the string is truthy
  // 0 is falsey but any other value is truthy. you can use truthy to trigger a function if(truthy){do something}
  // but it will not run if falsey
// }
// #endregion

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

let currentOrder = []

// function drawMenu(section){
//   let template = ''
//   section.forEach(item => template += `<div class="col-4" onclick="">
//   <img src="${item.image}" alt="">
//   <p>${item.name}</p>
//   <p>$${item.price}</p>
// </div>`)
//   let [section]Elm = document.getElementById("section")
//   [section]Elm.innerHTML = template
// }

function drawToppings(){
  let template = ''
  toppings.forEach(item => template += `<div class="card p-3 col-4" onclick="">
  <img class="img-fluid" src="${item.image}" alt="">
  <div class="row justify-content-evenly"><p class="col">${item.name}</p><p class="col">$${item.price}</p></div>
</div>`)
let toppingsElm = document.getElementById("toppings")
toppingsElm.innerHTML = template
}
drawToppings()

function drawVessels(){
  let template = ''
  vessels.forEach(item => template += `<div class="col-4" onclick="">
  <img class="img-fluid" src="${item.image}" alt="">
  <p>${item.name}</p>
  <p>$${item.price}</p>
</div>`)
let vesselsElm = document.getElementById("vessels")
vesselsElm.innerHTML = template
}
drawVessels()

function drawIceCream(){
  let template = ''
  iceCream.forEach(item => template += `<div class="col-4" onclick="">
  <img class="img-fluid" src="${item.image}" alt="">
  <p>${item.name}</p>
  <p>$${item.price}</p>
</div>`)
let iceCreamElm = document.getElementById("ice-cream")
iceCreamElm.innerHTML = template
}
drawIceCream()

function drawOrder(){
  let template = ""
  currentOrder.forEach(item => template += ``)
  let orderElm = document.getElementById("order-area")
  orderElm.innerHTML = template
}

// function drawTotal(){
//   let subtotal = 0
//   currentOrder.forEach(order => subtotal += order.price)
// }

// function clearOrders(){
//   currentOrder = []
//   drawOrder()
// }

// deletItem(index){
//   place 'onclick="deleteItem('${argument}')"'
//   let item = currentOrder[index]
//   if(window.confirm)
// }