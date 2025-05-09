const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true,

    },
    password :{
        type : String,
        required : true,
     
    }
});

UserSchema.pre("save", function(next){
    const user = this;
    if (!user.isModified('password')){
        return next();
    }
    bcrypt.genSalt(10, (err, salt)=>{
        if (err){
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err,hash)=>{
                if (err){
                    return next(err);
                }
                user.password = hash;
                next();

        })
    })
});

UserSchema.methods.comparePassword =function(candidatePassword){
    const user = this;
    console.log(this);
    console.log(user.password);
    return new Promise((resolve, reject)=>{
        bcrypt.compare(candidatePassword, user.password, (err, isMatch)=>{
            if (err){
                console.log(err);
                return reject(err);
            }
            if (!isMatch){
                console.log("not matched");
                return reject(false);
            }
            resolve(true);
        } )
    });
};


mongoose.model('User', UserSchema);