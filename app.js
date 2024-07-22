const express = require('express')
const app = express()
const path = require('path')
const { create } = require('express-handlebars')
// 預設會去找index.js
const articles = require("./data/articles/index.js")
const fs = require('fs')

// 設定樣板引擎
const hbs = create({ defaultLayout: 'main' });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// 設定絕對路徑
const articleJsonPath = path.join(__dirname, "./data/articles/articles.json")

// 根路由
// app.get("/", (req, res) => 
// {
//     res.render("home")
// })
app.get("/",(req, res) => {
    fs.readFile(articleJsonPath, (err, data) => {
        if(err) console.log(err)
        
        const articles = JSON.parse(data.toString())

        // 使用樣板
        res.render("articles", {
            articles: articles
        })
    })
})

// 單篇文章
app.get("/articles/:id", (req, res) => 
{
    const id = req.params.id
    fs.readFile(articleJsonPath, (err, data) => {
        if(err) console.log(err)

        const article = JSON.parse(data.toString())

        res.render("article", {
            article: article[id],
            backUrl: "/"
        })

    })
    // res.render("article", {
    //     article : [articles[id]],
    //     backUrl: "/articles"})
})

// 文章列表
app.get("/articles", (req, res) => 
{
    res.render("articles", {articles: articles})
})

// 設定public folder，可以直接取得靜態資源此例子http://localhost:3000/static/test.txt
app.use("/static", express.static("file"))

app.get("/page1", (req, res) => {
    res.send(`page1`)
})

app.get("/txt", (req, res) => {
    const absPath = path.join(__dirname, "/file/test.txt")
    res.sendFile(absPath, (err)=>{
        console.log(err)
    })
})

app.use("/", require("./routesapp"))

app.listen(3000, ()=>{
    console.log("express app listen on port 3000")
})