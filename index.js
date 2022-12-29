require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

//use bodyparser middleware for express to get the post and get data from methods
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.post('/api/shortUrl', function(req, res) {
var newURL = new URL(req.body.url)
  if(newURL.protocol == 'https:' || newURL.protocol == 'http:'){
      var directUrl = req.body.url;
  var randomNumber = Math.floor(Math.random() * 1000);
  res.json({ 
    original_url: directUrl,
    short_url: randomNumber
  });
app.get('/api/shortUrl/'+randomNumber, function(req,res){
  res.redirect(directUrl);
  });
  }else{
       return res.json({
      error: "invalid url"
    })
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
