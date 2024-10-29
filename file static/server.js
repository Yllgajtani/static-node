const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/pubic/index.html");
});
app.get('/contact', (req,res) =>{
    res.render('form');
});

app.get('/card', (req,res) =>{
    const name = req.query.name;
    const surname = req.query.surname;
    const mosha = req.query.mosha;
    res.render('card',{name,surname,mosha});
});


app.listen(2031,() =>{
    console.log("serveri eshte duke u ber run ne localhost:2031")
});
