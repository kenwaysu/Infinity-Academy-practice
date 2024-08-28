let P=0;
// 模板字串
let name = `模板字串`
let stradd = `模板字串可以直接相加${P}不須再用+字號\n換行`
console.log(stradd)
// 部會自動轉換type寫三個===，兩個==會自動轉換
// 是否不相等!=
console.log(5 === 6)//顯示false
// 且&& 或|| 非!
console.log(true && true) //會顯示true
console.log(true || false) //會顯市true
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

//include 
let number = [1, 2, 3, 4, 5];
console.log(numbers.includes(4, 3)); // (從第4個開始查找，找到的值是 4)true

let str = "apple,banana,mango";

// str轉array
let arr1 = str.split(",");
console.log(arr1); // ["apple", "banana", "mango"]

// 以空格分隔
let str2 = "The quick brown fox";
let arr2 = str2.split(" ");
console.log(arr2); // ["The", "quick", "brown", "fox"]

// 不使用分隔符，將每個字符作為單獨的元素
let str3 = "hello";
let arr3 = str3.split("");
console.log(arr3); // ["h", "e", "l", "l", "o"]

str.form()//["h", "e", "l", "l", "o"]
const strArr = [...str]//["h", "e", "l", "l", "o"]

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
// set
let numbers = [1, 2, 3]
let setUse = new Set(numbers)
setUse.add(4)
setUse.delete(3)
console.log([...setUse])
for(let value of setUse){
    console.log(value)
}
setUse.forEach(value=>{
    console.log(value)
})

let num = [1, 2, 3, 4, 5, 6]
num.forEach( value => {
    console.log(value)
})

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

