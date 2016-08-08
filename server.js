var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest:'./uploads/'});
var path = require('path');

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));

app.get('/',function(req,res){
var file = path.join(__dirname+'/public/index.html');
res.sendFile(file, function(err){

  if(err){
    console.log('failed to render index.html.');
  }
  else{
    console.log('homepage sent.')
  }
})
})

app.post('/',upload.single('submit-file'),function(req,res){


var name = req.file.size;
console.log(name);

res.send({size:name})
})

app.listen(app.get('port'),function(){

  console.log('listening on: '+ app.get('port'));
})
