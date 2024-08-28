import express from 'express'
import mysql from 'mysql2'

const app = express()
const pool = mysql.createPool({
    host:'localhost',
    database:'todolist',
    user:'root',
    password:'subo2882'
})



app.get('/',async(req,res)=>{
    pool.getConnection((err,conn)=>{
        conn.query('INSERT INTO users VALUES (?, ?, ?)',
        [1, "Alice", "alice@example.com"],
        (err, results, fields)=>{
            if (err) {
                // 如果發生錯誤，將錯誤信息回傳
                console.error(err);
                res.status(500).send('Error inserting data');
            } else {
                // 成功插入後回傳 'hello world'
                res.send('hello world');
            }
        })
    })
})

app.listen(3000, ()=>{
    console.log("express app listen on port 3000")
})