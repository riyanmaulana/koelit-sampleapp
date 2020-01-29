const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '//';
const port = 8000;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });
  
  router.get('/', function(req,res){
    res.sendFile(path + 'index.html');
  });
  
  router.get('/team', function(req,res){
    res.sendFile(path + 'team.html');
  });


app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8000!')
})
// app.set('port', 80);
// app.listen(app.get('port'), function() {
//     console.log('Server up: http://localhost:' + app.get('port'));
// });