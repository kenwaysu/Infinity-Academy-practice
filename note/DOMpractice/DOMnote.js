// 呼叫四種Name的基本表達式子
// <h1 class="className" id="idName" attributeName="attributeValue"></h1>
document.querySelector('tagName')//h1就是tagName
document.querySelector('.className')
document.querySelector('#idName')
document.querySelector('[attributeName="attributeValue"]')

// class規則 querySelector只會顯示第一個。用querySelectorAll則會顯示全部
document.querySelector('rule1 rule2')   //選擇符合1以下符合2的子節點
document.querySelector('rule1, rule2')  //選擇符合1和2的節點
document.querySelector('rule1rule2')    //選擇符合1且2的節點
document.querySelector('rule1 > rule2') //選擇符合1的子元素中符合2的第一個元素
document.querySelector('rule1 + rule2') //選擇緊接1之後的兄弟元素中符合2的第一個元素s
document.querySelector('rule1 ~ rule2') //選擇所有1之後的兄弟元素中符合2的所有元素

// 取得父子系列的節點
document.querySelector().parentElement
document.querySelector().children
document.querySelector().childNodes

// 樣式
document.querySelector().classList            //選取符合條件的class，並且把class的值以array方式給予
document.querySelector().classList.contains() //篩選class中包含了特定名字
document.querySelector().classList.add()      //增加class的名稱，會空一格加在後面
document.querySelector().classList.remove()   //刪除class的名稱
document.querySelector().classList.toggle()   //有的話就刪除，沒有的話就新增

document.querySelector().className = '...'

document.querySelector().style.display = '...'

document.querySelector().getAttribute('attributeName')    //取得attributeValue
document.querySelector().setAttribute('attributeName', 2) //把attributeValue設定成2

document.querySelector().innerHTML //取得HTML標籤並且具備渲染功能
document.querySelector().innerText //單傳取得文本內容，若有標籤會成為字串

//新增刪除DOM
const node = document.querySelector('.self')
node.removeChild(document.querySelector('.item'))//移除自身下方class為item的子元素
const newEle = document.createElement('div')
newEle.innerHTML = `
    <span class="container">這裡會增加元素且標籤有效
        <button class="btn delete">delete</dbutton>
        <button class="btn delete">delete</button>
        <button class="btn delete">delete</button>
    </span>
`
node.appendChild(newEle)
document.querySelector(".container").addEventListener('click', (evt)=>
    {
        if(evt.target.classList.contains('delete')){
            evt.target.remove()
        }
    }
)

// event有很多種類需要時再來補充