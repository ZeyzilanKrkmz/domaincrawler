const mongoose=require("mongoose");

const schema=mongoose.Schema({
    date:{type:Date,required:true},
    domain:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"domains"},
    new_reagistration_fee:{type:mongoose.SchemaTypes.Decimal128},
    new_reagistration_badges:{type:[String]},
    renewal_fee:{type:mongoose.SchemaTypes.Decimal128},
    renewal_badges:{type:[String]},
    transfer_fee:{type:mongoose.SchemaTypes.Decimal128},
    transfer_badges:{type:[String]},
    company:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"companies"},
    is_active:{type:Boolean,default:true},
    currency:{type:String,default:"USD"},
    language:{type:String,default:"EN"}
},{
    versionKey:false,
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

class Prices extends mongoose.Model{

}

schema.loadClass(Prices);
module.exports=mongoose.model("prices",schema);