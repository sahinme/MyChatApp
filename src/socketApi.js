const socketio=require('socket.io');
const socketAuthorization=require('../middleware/socketAuthorization');

const io=socketio();

const socketApi={
    io //--> ES6 io=io
};

io.use(socketAuthorization);

io.on('connection',socket=>{
    console.log("a user logged in with this name: "+socket.request.user.name);
});

module.exports=socketApi;