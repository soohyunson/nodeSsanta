var express = require('express');
var router = express.Router();
// var helmet = require('helmet');
var app = express();
// app.use(helmet());

app.set('trust proxy', 1);
//   MySQL 로드
var user;
/* GET home page. */
router.get('/', function(req, res, next) {
      res.redirect('./test');
});

router.get('/test', function(req, res, next){

  //  if (req.session.manager) {
    //  res.redirect('/test')
    res.render('./test', {
      text: ''
    });
  //  }else{
  //   //  res.redirect('/test')
  //   res.render('./test', {
  //     text: ''
  //   });
  //  }
});

// router.get('/TermsofUse', function(req, res, next){
//     res.render('./TermsofUse', {
//       text: ''
//     });
// });

// router.get('/getaddrname', function(req, res, next) {
//       res.render('./getasstname');
// });
module.exports = router;