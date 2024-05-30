let totalPrice=0;
// 模板字串
let name = `模板字串`
let stradd = `模板字串可以直接相加${totalPrice}不須再用+字號\n換行`
console.log(stradd)
// 判斷是否為相等要寫===
// 是否不相等!=
console.log(5 === 6)//顯示false
// 且$$ 或|| 非!
console.log(true && true) //會顯示true
console.log(true || false) //會縣市true
console.log(!true)//會顯示false

// 本地儲存資料
localStorage.setItem("price",2000);
// 本地刪除資料
localStorage.removeItem("price")
// 取得本地儲存資料
localStorage.getItem("price")

// object轉換成字串JSON格式，才能傳送給網頁
cart = {
    a:1,
    b:2,
    c:"d",
}
console.log(cart)
// stringify轉換成JSON字串
// parse把JSON字串轉換成object
let price = JSON.stringify(cart)
console.log(price)
console.log(JSON.parse(price))
// stack heap儲存型態 //把物件中的屬性同時作為變數儲存
const {a,b}=cart
console.log(a,b)