// var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
// var app = express(); //express를 실행하여 app object를 초기화 합니다.

// app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
//   res.redirect('/test'); // "Hello World!"를 보냅니다.
// });

// var port = 8005; // 사용할 포트 번호를 port 변수에 넣습니다. 
// app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
//   console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
// });


var express = require('express');
var path = require('path');
var http = require('http');

var index = require('./index');

var app = express();

app.set('trust proxy', 1);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8005);

// 세션 설정
// app.use(expressSession({
//    secret:'wqceaqqfwqewdewqewqfaeqe',
//    resave:true,
//    saveUninitialized:true
// }));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
   res.status(404).send('Sorry cant find that!');

  // err.status = 404;
  // next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
   res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
   res.header('Expires', '-1');
   res.header('Pragma', 'no-cache');

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
http.createServer(app).listen(app.get('port'), function(){
  console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));
});