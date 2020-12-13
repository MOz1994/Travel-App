// Setup empty JS object to act as endpoint for all routes

const dotenv = require('dotenv');
dotenv.config();
const uName = process.env.userName;
const weatherKey = process.env.weatherKey;
const pixK = process.env.pixKey;
const pdata = {
        'userName': uName,
        'wKey': weatherKey,
        'pKey': pixK
    }
    // Express to run server and routes
const express = require('express');
const path = require('path');
const projectData = [];


// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
module.exports=app
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static(path.join(__dirname, 'dist')));

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
        console.log('Example app listening on port 3000')

    })
    // Initialize all route with a callback function
app.get('/', function(req, res) {
        res.sendFile('dist/index.html')

    })
    //send api
app.get('/username', sendUname);

function sendUname(req, res) {
    res.send(pdata);
    console.log(pdata);


}
// Callback function to complete GET '/all'

app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
    console.log(projectData);

};
// Post Route

app.post('/wData', addFeel);

function addFeel(req, res) {
    console.log(req.body)
    newEnrty = {
        countryName: req.body.countryName,
        city: req.body.city,
        // lng: req.body.lng,
        // minT: req.body.minTemp,
        // maxTemp: req.body.maxTemp,
        pic: req.body.pic,
        temp: req.body.temp,
        cDate: req.body.countDay
            // city: req.body.city,


    }

    projectData.push(newEnrty);
    res.send(projectData);
    console.log(projectData)
};