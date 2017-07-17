var express = require('express');

var router = express.Router();

const Disease=require('../models/disease');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test',(req,res,next)=>{
  res.json({success:true});
});

router.post('/saveDisease',(req,res,next)=>{
  console.log('saveDisease')
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.fields);
  let newDisease= new Disease({
    
    title:req.body.title,
    fields:req.body.fields  
  //   title:'abc',
  //  fields:['def','ghi']
});
console.log("title"+newDisease.title);
console.log("fields "+newDisease.fields);
  Disease.addDisease(newDisease,(err,disease)=>{
    console.log('inside add disease');
    if(err){res.json({success:false});

  }
    else{
      res.json({success:true});
    }
 // res.send('saves');
  })
  console.log("save it");
})


module.exports = router;
