const express =  require('express');
const app = express();

const mongoose = require('./database/mongoose');

const TaskList = require('./database/models/tasklist');
const Task = require('./database/models/task');

/*
CORS - cross origin request security
Backend - http://localhost:3000
Frontend - http://localhost:4200
*/

// 3rd party library,app.use(cors());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Example of middleware
app.use(express.json()); //or 3rd party body parser



//Routes Of rest API Endpoint or Restfull web services
/*
TaskList - create ,update,ReadTaskListByID,ReadAll
Task -  create ,update,ReadTaskByID,ReadAll
*/

//Routes or API endpoint for taskList model
//Get all task List
//http://localhost:3000/tasklists => [ {taskList}, {tasklList} ]
app.get('/tasklists', (req, res) => {
    TaskList.find({})
        .then((list) => {res.send(list)})
        .catch((error)=>{console.log(error)});
});











/*app.listen(3000, function(){
    console.log("server started on port 3000");
}); */

/* use arror function */
app.listen(3000, () =>{
    console.log("server started on port 3000 ");
});