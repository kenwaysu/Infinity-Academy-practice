import express from 'express'
import highClass1Routes from './routes/highClass1.js'
const app = express()

app.use('/', )

app.use('/highClass1', highClass1Routes)
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

// import express from 'express';

// const app = express();

// // 中间件函数
// app.use((req, res, next) => {
//     console.log('Request URL:', req.url); // 输出请求的 URL 到控制台
//     next(); // 将控制权传递给下一个中间件或路由处理函数
// });

// // 路由处理函数
// app.get('/', (req, res) => {
//     res.send('Hello World'); // 向浏览器发送响应 "Hello World"
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
