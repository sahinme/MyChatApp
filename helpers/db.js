const mongoose=require('mongoose');

module.exports=()=>{
    mongoose.set('useCreateIndex',true);
    mongoose.connect(process.env.DB_STRING,{ useNewUrlParser: true });

    mongoose.connection.on('open',()=>{
        console.log('MongoDB:Connected');
    });

    mongoose.connection.on('error',(err)=>{
        console.log('error',err);
    });
    mongoose.Promise=global.Promise;

};