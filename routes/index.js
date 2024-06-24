const express = require("express")
const router = express.Router()

// 根路由
router.get("/", (req, res) => 
{
    res.render("home")
})

// 單篇文章
router.get("/articles/:id", (req, res) => 
{
    const id = req.params.id
    res.render("article", {
        articles : [articles[id]],
        backUrl: "/articles"})
})

// 文章列表
router.get("/articles", (req, res) => 
{
    res.render("articles", {articles: articles})
})

// 設定public folder，可以直接取得靜態資源此例子http://localhost:3000/static/test.txt
router.use("/static", express.static("file"))

router.get("/page1", (req, res) => {
    res.send(`page1`)
})

router.get("/txt", (req, res) => {
    const absPath = path.join(__dirname, "/file/test.txt")
    res.sendFile(absPath, (err)=>{
        console.log(err)
    })
})

module.exports = router