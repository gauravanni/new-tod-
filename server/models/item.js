var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ItemSchema= new Schema({
  category:{
    type:String,
  },
   title:{
    type:String,
  },
   url:{
    type:String,
  }
});

module.exports=mongoose.model('Item',ItemSchema);
