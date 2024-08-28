// // 找第二大
// const arr = [9,7,6,5,4,3,2,8,9,9]
// function findSecMax(){
//     let secmax = 0
//     for(let i = 0; i < arr.length; i++){
//         let eventOccur = 0
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] >= arr[j]){
//                 eventOccur++
//             }
//         }
//         if(eventOccur === arr.length - 1){
//             secmax = arr[i]
//             break
//         }
//     }
//     console.log(secmax)
// }
// findSecMax(arr)

// const arr = [9,7,6,8,8,3,9,9]
// function findSecMax(){
//     let max = 0
//     let secMax = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= max){
//             max = arr[i]
//         }else if(arr[i] >= secMax){
//             secMax = arr[i]
//         }
//     }
//     console.log(secMax)
// }
// findSecMax(arr)


// 陣列反轉
// const arr = [1 ,2 ,3 ,4 ,5]
// function reverse(){
//     const reversedArr = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         reversedArr.push(arr[i])
//     }
//     console.log(reversedArr)
// }
// reverse(arr)

// const arr = [1 ,2 ,3 ,4 ,5]
// function reverse(){
//     const reversedArr = []
//     for(let i = 0; i < arr.length; i++){
//         reversedArr[i] = arr[arr.length - (i+1)]
//     }
//     console.log(reversedArr)
// }
// reverse(arr)

// const str =  'hello'
// function reverseStr(){  
//     let setStrArr = [...str]
//     let reversedArr = []
//     for(let i = 0; i < setStrArr.length; i++){
//         reversedArr.unshift(setStrArr[i])
//     }
//     return reversedArr.join("")
// }
// const reversedStr = reverseStr(str)
// console.log(reversedStr)


// 移除重複
// const arr = [3, 3, 5, 7, 8, 3, 8, 2]
// function removedDuplicate(){
//     let removedArr = []
//     for(let i = 0; i < arr.length; i++){
//         let duplicated = false
//         for(let j = 0; j < removedArr.length; j++){
//             if(arr[i] === removedArr[j]){
//                 duplicated = true
//                 break
//             }
//         }
//         if(!duplicated){
//             removedArr.push(arr[i])
//         }
//     }
//     console.log(removedArr)
// }
// removedDuplicate(arr)

// const arr = [3, 3, 5, 7, 8, 3, 8, 2]
// function removedDuplicate(){
//     const removedArr = [...new Set(arr)]
//     console.log(removedArr)
// }
// removedDuplicate(arr)

// const arr = [3, 3, 5, 7, 8, 3, 8, 2]
// function removeDuplicate(arr) {
//     let removedArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(!removedArr.includes(arr[i])){
//             removedArr.push(arr[i])
//         }
//     }
//     console.log(removedArr)
// }
// removeDuplicate(arr)