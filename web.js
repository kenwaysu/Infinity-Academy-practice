function runGame(userChoose){
    const computerChoose = Math.random()*3;
    if(computerChoose <= 1){
        // 電腦選剪刀
        if(userChoose == 1){
            // 玩家選剪刀
            return alert("電腦選剪刀，平手")
        }
        else if(userChoose == 2){
            // 玩家選石頭
            return alert("電腦選剪刀，你贏了")
        }
        else if(userChoose == 3){
            // 玩家選布
            return alert("電腦選剪刀，你輸了")
        }
    }
    else if(computerChoose <= 2 && computerChoose >1){
        // 電腦選石頭
        if(userChoose == 1){
            // 玩家選剪刀
            return alert("電腦選石頭，你輸了")
        }
        else if(userChoose == 2){
            // 玩家選石頭
            return alert("電腦選石頭，平手")
        }
        else if(userChoose == 3){
            // 玩家選布
            return alert("電腦選石頭，你贏了")
        }
    }else{
        if(userChoose == 1){
            // 玩家選剪刀
            return alert("電腦選布，你贏了")
        }
        else if(userChoose == 2){
            // 玩家選石頭
            return alert("電腦選布，你輸了")
        }
        else if(userChoose == 3){
            // 玩家選布
            return alert("電腦選布，平手")
        }
    }
};
// console.log(computerchoose());

let cart = {
    product :{
        product_1 : 0,
        product_2 : 0,
        product_3 : 0,
        totalPrice : 0,
    }
}
// 從localstorage提取資料
let storageCartJSON = localStorage.getItem("cart")
let stroageCartObject = JSON.parse(storageCartJSON)
cart.product = stroageCartObject.product
// console.log(stroageCartObject)
// localStorage.removeItem("cart")
function showCart(){
    console.log(`product_1 : ${cart.product.product_1}`)
    console.log(`product_2 : ${cart.product.product_2}`)
    console.log(`product_3 : ${cart.product.product_3}`)
    console.log(`totalPrice : ${cart.product.totalPrice}`)
}
function cartStorage(){
    let jsonCart = JSON.stringify(cart)
    localStorage.setItem("cart",jsonCart)
}
function resetCart(){
    cart.product.product_1 = 0;
    cart.product.product_2 = 0;
    cart.product.product_3 = 0;
    cart.product.totalPrice = 0;
    let jsonCart = JSON.stringify(cart)
    localStorage.setItem("cart",jsonCart)
    // return cart
}

// function subscripe(){
//     const subscripeButton = document.querySelector('#subscripe')
//     subscripeButton.innerHTML = "已訂閱"
// }

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#subscripe');
  
    button.addEventListener('click', () => {
        const subscripeButton = document.querySelector('#subscripe')
        if(subscripeButton.innerHTML === "訂閱"){
            subscripeButton.innerHTML = "已訂閱"
        }
        else{
            subscripeButton.innerHTML = "訂閱"
        }
    });
  });

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('#subscripe');
  
//     button.addEventListener('click', subscripe);
//   });
  
// function subscripe(){
//     const subscripeButton = document.querySelector('#subscripe')
//     subscripeButton.innerHTML = "已訂閱"
// }
// console.log(jsonCart)
// localStorage.setItem("cart",jsonCart)
// console.log(localStorage.getItem("cart"))