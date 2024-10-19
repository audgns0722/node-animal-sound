const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

// 콜백함수: 함수끝나고 실행시킬 함수
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    
    if(name == "dog")
    {
        res.json({"sound" : "멍멍"}) 
    }
    else if(name == "cat")
    {
        res.json({"sound" : "야옹"}) 
    }
    else 
    {
        res.json({"sound": "알수없음"})
    }
})

app.get('/user/:id', function (req, res) {
    const p = req.params
    //console.log(p)

    const q = req.query
    console.log(q)
    console.log(q.name)

    res.json({'userid' : q.name})
})

app.listen(3000)