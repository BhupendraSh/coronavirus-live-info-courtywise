const express = require('express')

const covid = require('corona-info'); 

const bodyParser = require('body-parser')

const app = express()

var PORT = process.env.port || 8000

app.set('view engine',"ejs")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res) => {
    res.render("index")
})

app.post('/getdata',(req,res) => {
  var country = req.body.country
  covid.findData({ country: country }).then(response => {
    console.log(response);

    res.json({
        data:response
    })
  });
})

app.listen(8000,(error) => {
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT)
    
})
