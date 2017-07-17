var mongoose=require('mongoose');

const config=require('../config/database');

const diseaseSchema=mongoose.Schema({
    title:{
        type:String
    },
    fields:
        [{
        name:String
        }
        ]   
    
});

const Disease=module.exports=mongoose.model('Disease',diseaseSchema);

module.exports.getUserById=function(id,callback){
    Disease.findById(id,callback);  
}

module.exports.addDisease=function(newDisease,callback){
    console.log('add dis ')
    newDisease.save(callback);
}