var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var portDecision = process.env.PORT || 3000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

//Static Files
app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.listen(portDecision, function(){
  console.log('running on port', portDecision);
});
