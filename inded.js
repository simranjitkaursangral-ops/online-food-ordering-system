const cartIcon = document.querySelector("#cart-icon")
const cart = document.querySelector( ".cart")
const cartClose = document.querySelector("#cart-close")
cartIcon.addEventListener("click",() => cart.classList.add("active"));
cartClose.addEventListener("click",() => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click" ,  event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);
    });
});
const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
     const productTitle = productBox.querySelector(".product-title").textContent;
      const productPrice = productBox.querySelector(".price").textContent;

      const cartBox =  document.createElement("div");
      cartBox.classList.add("cart-box");
      cartBox.innerHTML = `
      <img src="${productImgSrc}" class="cart-img">
      <div class="cart-detail">
      <h2 class="cart-product-title">${productTitle}<h2>
      <span class="cart-price">${productPrice}</span>
      <div class="cart-quantity">
      <button id="decrement">-</button>
      <span class="number">1</span>
      <button id="increment">+</button>
      </div>
      </div>
      <i class="ri-delete-bin-line cart-remove"></i>
      `;
cartContent.appendChild(cartBox);
cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
    cartBox.remove();

    updateCartCount(-1);

    updateTotalPrice();
});
cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
    const numberElement = cartBox.querySelector(".number");
     const decrementButton = cartBox.querySelector("#decrement");
     let quantity = numberElement.textContent;

     if(event.target.id === "decrement" && quantity > 1){
        quantity--;
        if(quantity === 1){
            decrementButton.style.color = "#999";
        }
        }else if (event.target.id === "increment"){
            quantity++;
            decrementButton.style.color = "#333";
        }

     numberElement.textContent = quantity;

     updateTotalPrice();
});
   updateCartCount(1);

   updateTotalPrice();
};
 const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("Rs","");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    });
    totalPriceElement.textContent = `$${total}`;
 };
 let cartItemCount = 0;
 const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if(cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    }else{
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }

 };


// let itemm ={
//     Id: 1,
//     item_image:`dumplings.webp`,
//     rating:{
//         stars: 4.5,
//     noOfReviews:100,
// },
// price: 80,
// original_price: 120,
// discount: 40,
// }
// let itemm2 ={
//     item_image:`pizza.webp`,
//     rating:{
//         stars: 4.5,
//     noOfReviews:120,
// },
// price: 199,
// original_price: 250,
// discount: 40,
// }
// let itemm3 ={
//      item_image:`sandwich.jpeg`,
//     rating:{
//         stars: 4.0,
//     noOfReviews:100,
// },
// price: 99,
// original_price: 150,
// discount: 40,
    
// }
// let itemm4 ={
// item_image:`hakkanoddle.webp`,
//     rating:{
//         stars: 4.5,
//     noOfReviews:150,
// },
// price: 100,
// original_price: 150,
// discount: 40,
   
// }
// let itemm5 ={
//      item_image:`burger.webp`,
//     rating:{
//         stars: 4.0,
//     noOfReviews:100,
// },
// price: 89,
// original_price: 120,
// discount: 40,
// }
// let itemm6 ={

//     item_image:`dosa.webp`,
//     rating:{
//         stars: 4.5,
//     noOfReviews:160,
// },
// price: 69,
// original_price: 120,
// discount: 40,
// }
// let bagItems = [];
//  onLoad();

// function onLoad(){
//     let bagItemsStr = localStorage.getItem('bagItems');
//     bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
// displayItemsOnHomePage();
// displayBagIcon();
// }

// function addToBag(itemmId){
//   bagItems.push(itemmId);
//   localStorage.setItem('bagItems', JSON.stringify(bagItems));
//     displayBagIcon();

// }
// function displayBagIcon(){
//     let cartCountElement = document.querySelector(`.cart-count`);
//     if (bagItems.length > 0){
//       cartCountElement.innerText = bagItems.length;  
//       cartCountElement.style.visibility = 'visible';
//     }
//      else{
//        cartCountElement.style.visibility ='hidden';
//      }
// }

// function displayItemsOnHomePage(){
// let itemsElement = document.querySelector(`#items`);

// itemsElement.innerHTML =`
//     <div class="item">
//     <img src="${itemm.item_image}">
//     <h4>Dumplings</h4>
//     <h4> ${itemm.rating.stars}⭐|${itemm.rating.noOfReviews}</h4>
//     <span class="price">Rs ${itemm.price}</span>
//     <span class="original_price"> Rs ${itemm.original_price} </span>
//     <span class="discount"> (${itemm.discount}% off)</p><br>
//     <button class="buttn" onclick="addToBag(${itemm.Id})">Add to cart</button>
//    </div>
//    <div class="item">
//     <img src="${itemm2.item_image}">
//     <h4>Pizza</h4>
//     <h4> ${itemm2.rating.stars}⭐|${itemm2.rating.noOfReviews}</h4>
//     <span class="price">Rs ${itemm2.price} </span>
//     <span class="original_price"> Rs 250 </span>
//     <span class="discount"> (${itemm2.discount}% off)</p><br>
//      <button class="buttn" onclick="addToBag(${itemm.Id})">Add to cart</button>
//    </div><div class="item">
//     <img src="${itemm3.item_image}">
//     <h4>Sandwich</h4>
//     <h4> ${itemm3.rating.stars}⭐|${itemm3.rating.noOfReviews}</h4>
//     <span class="price">Rs ${itemm3.price}</span> 
//     <span class="original_price"> Rs ${itemm3.original_price}</span>
//     <span class="discount"> (${itemm3.discount}% off)</p><br>
//     <button class="buttn" onclick="addToBag(${itemm.Id})">Add to cart</button>
//    </div><div class="item">
//     <img src="${itemm4.item_image}">
//     <h4>Noodles</h4>
//     <h4> ${itemm4.rating.stars}⭐|${itemm4.rating.noOfReviews}</h4>
//     <span class="price">Rs ${itemm4.price}</span>
//     <span class="original_price"> Rs ${itemm4.original_price} </span>
//     <span class="discount"> (${itemm4.discount}% off)</p><br>
//      <button class="buttn" onclick="addToBag(${itemm.Id})">Add to cart</button>
//    </div><div class="item">
//     <img src="${itemm5.item_image}">
//     <h4>Burger</h4>
//     <h4> ${itemm5.rating.stars}⭐|${itemm5.rating.noOfReviews}</h4>
//     <span class="price">Rs ${itemm5.price}</span> 
//     <span class="original_price"> Rs ${itemm5.original_price} </span>
//     <span class="discount"> (${itemm5.discount}% off)</p><br>
//      <button class="buttn" onclick="addToBag(${itemm.Id})">Add to cart</button>
//    </div>
//    <div class="item">
//     <img src="${itemm6.item_image}">
//     <h4>Dosa</h4>
//     <h4> ${itemm6.rating.stars}⭐|${itemm6.rating.noOfReviews}</h4>
//     <span class="price">Rs ${itemm6.price}</span>
//     <span class="original_price"> Rs ${itemm6.original_price}</span>
//     <span class="discount"> (${itemm6.discount}% off)</p><br>
//     <button class="buttn" onclick="addToBag(${itemm.Id})">Add to cart</button>
//    </div>`;}

// // let cartquantity =0;
// // document.querySelector(`#cart`).innerText =`cart` + cartquantity + `🛒`
const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () =>{
    window.location.href = "checkout.html";
});

