const socketio=require('socket.io');
const socketAuthorization=require('../middleware/socketAuthorization');
//lib
const onlineUsers=require('./lib/onlineUsers');

const io=socketio();

const socketApi={
    io //--> ES6 io=io
};

io.use(socketAuthorization);

io.on('connection',socket=>{
    console.log("a user logged in with this name: "+socket.request.user.name);

    onlineUsers.upsert(socket.id,socket.request.user);

    socket.on('disconnect',()=>{
        onlineUsers.remove(socket.request.user.googleId);
    });
});


module.exports=socketApi;