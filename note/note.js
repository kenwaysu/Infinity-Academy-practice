let P=0;
// 模板字串
let name = `模板字串`
let stradd = `模板字串可以直接相加${P}不須再用+字號\n換行`
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
// array
let array = [0, '字串', 50, true, {value : 20}]
console.log(array[1], array.length)
array[1] = 2
console.log(array)
array.push(10) //從陣列的最後面增加資料
console.log(array)
array.splice(2, 2) //從陣列的第3比開始移除掉2筆資料
console.log(array)

// while
let i = 1
let sum =0
while(i<=100){
    sum = sum + i
    i += 1
}
console.log(sum)

// for
for(let i=0; i<5; i++){
    console.log(i)
}

// AJAX
let value = true
const c = Math.random()
if(c >0.5 && c <=1 ){
    value = false
}else{
    value = true
}

const p = new Promise((resolve, reject) => {
        if(value){
            resolve("value is ture")
        }else{
            reject('value is false')
        }
    })

p
.then(resolveReturn => {console.log(`${resolveReturn} : return to .then()`)}) //resolve()中的值會回傳到.then裡面
.catch(rejectReturn => {console.log(`${rejectReturn} : return to .catch()`)}) //reject()中的值會回傳到.catch裡面

function delay1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve('1sec')
        }, 1000)
    })
}
function delay2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            resolve('2sec')
        }, 2000)
    })
}

let promise = delay1()
promise.then(message => {console.log(message)})

Promise.all([delay1(), delay2()]).then(([meg1, meg2])=>{
    console.log(meg1, meg2)})

async function getDelay(){
    let sec1 = await delay1()
    console.log(sec1)
}
getDelay()

async function getDelayGroup(){
    let sec1 = delay1()
    let sec2 = delay2()
    let [sec1Data, sec2Data] = await Promise.all([sec1, sec2])
    console.log(sec1Data, sec2Data)
}
getDelayGroup()

const axios = require('axios')
async function getBinanceData(){
    try {
        let binance = await axios('https://api.binance.com/api/v3/ticker/price')
        let pairs = await binance.data.map(item => item.symbol)
        let usdtPairs = pairs.filter(item => item.includes('USDT'))
        console.log(usdtPairs.length)

    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
getBinanceData()

async function getBybitData(){
    try {
        const bybit = await axios('https://api.bybit.com/spot/v3/public/symbols')
        const pairs = await bybit.data.result.list.map(item => item.name)
        const usdtPairs = pairs.filter(coin => coin.includes('USDT') )
        console.log(usdtPairs.length)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
getBybitData()
