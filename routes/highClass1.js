import express from 'express'
const router = express.Router()

router.get('/midClass1', (req,res) => {
    res.send('this is a midCLass1')
})

export default router