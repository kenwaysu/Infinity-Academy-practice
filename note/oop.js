// 匿名物件
let dog = {}
dog.name = "狗狗"
console.log(dog)
dog.type = function showType(){
    console.log('柴犬')
}
dog.type()
console.log(dog)

// construction function就是用new存入變數裡
function Dog(name, color){
    this.name = name
    this.color = color
    this.type = function showType1(type){
        console.log(`品種: ${type}`)
    }
}
const dog1 = new Dog('dog', 'brown')
dog1.type('柴犬')

// class
class Cat {
    constructor(name, color){
        this.name = name
        this.color = color
        this.type = function showCatType(catType){
            console.log(`品種: ${catType}`)
        }
    }
}
const cat = new Cat('貓貓', '棕色')
cat.type('波絲')

class Cat2 {
    constructor(name, color){
        this.name = name
        this.color = color
        this.type = function showCatType(catType){
            console.log(`品種: ${catType}`)
        }
    }
    // 這是物件層級，要new存入一個變數才可以使用
    playtogether(someone){
        console.log(`黑色喵喵和${someone.color}${someone.name}一起玩`)
    }
    // static後是class層級的函數，可以直接用class.function()來使用
    static calculate(a, b, c){
        console.log(a+b+c)
    }
}

const showObjectLevel = new Cat2()
showObjectLevel.playtogether(cat)
Cat2.calculate(1,2,3)

// 封裝
class Stock{
    constructor(){
        this.kline = {
            open: (meg) =>{
                // console.log(`${meg}`)
                let userinput = null
                if(typeof meg === 'number'){
                    userinput = meg
                }
                else if(typeof meg === 'string'){
                    userinput = 'string'
                }else{
                    userinput = 'not a number or string'
                }
                console.log(`${userinput}`)
            },
            high: (meg) =>{
                console.log(`${meg}`)
            }
        }
    }
    open(num){
        // let userinput = null
        // if(typeof num === 'number'){
        //     userinput = num
        // }
        // else if(typeof num === 'string'){
        //     userinput = 'string'
        // }else{
        //     userinput = 'not a number or string'
        // }
        // this.kline.open(userinput)
        this.kline.open(num)
    }
    
}

const a = new Stock()
a.open(3)
a.open('kbt')
a.open(true)

//繼承ES5語法舊式表達
function Parent1(name, age){
    this.name = name
    this.age = age
    this.showMeg = ()=>{console.log(name, age)}
}

function Child1(asset){
    this.asset = asset
    this.showAsset = ()=>{console.log(asset)}
}
Child1.prototype = new Parent1('child', 10)
const child1 = new Child1(100)
child1.showMeg()
child1.showAsset()

// ES6的繼承，主要用法
class Parent{
    constructor (name, age){
        this.name = name
        this.age = age
    }
    
}

class Child extends Parent{
    // constructor(name, age, asset){
    //     super(name, age)
    //     this.asset = asset
    // }
}

const child = new Child('小孩', 10 ,100)
console.log(child.name,child.age)
