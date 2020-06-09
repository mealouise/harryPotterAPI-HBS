const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const getHouses = require('./lib/harryPotter');
// //testing server is working
// app.get('/', async(req,res) => {
//     res.send("server is working!")
// })



app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs ({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');


app.get('/', async(req,res) => {
    // let houseInfo = await getHouses(house);
    //let name = data[0].name;
    // let houseGhost = data[0].houseGhost;
    res.render('index')
});


app.post('/', async(req,res) => {
    let houseInfo = await getHouses(house);
    let house = req.body.house;
    res.render('index', { houseInfo })
})

app.listen(3002, () => {
    console.log("you are listening on port 3002");
});