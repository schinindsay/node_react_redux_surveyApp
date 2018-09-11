//import in express library
//common.js modules --> system that is available for importing files into js -->
const express = require('express');

//represents a running express app.  Sometimes you will have many apps (but not usually)
const app = express();

//create a route handler and associate it with a given route


app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

//when heroku runs it can inject environment variables (variables that are set in the underlying runtime that node is running on top of) -- this is heroku's opportunity to pass us runtime config. --> changes port dynamically by heroku
//if we are running this code on a dev. evironment on machine we can't use this so we use || 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//***** don't forget to add engines object to package.json 
//the engines object in package.json allows us to specify node environment */

//**** also in package.json --> specify start script
//do this by deleting test scripts and adding "start" : node index.js inside scripts */