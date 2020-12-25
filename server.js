// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
// Dependencies
const bodyParser = require('body-parser')

/* Middleware*/
   //Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

   // Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

    // Initialize the main project folder
app.use(express.static('website'));


   // Setup Server
const port = 3600;

  // spin up the server
const Server = app.listen(port,listening);
function listening(){
    console.log(`server running on ${port}`);
}

// Initialize all route with a Callback function

  // Callback function to complete GET '/personInfo'
app.get('/personInfo',(req,res) => {
    res.send(projectData)
})

// POST Route
app.post('/userData', (req,res) =>{
     // appear data at terminal
    console.log(req.body);
      // store data (temp,date,feelings)
    input = {
        temp:req.body.temp,
        date:req.body.date,
        content:req.body.content
    }
    projectData.push(input)
})


