const socketio=require('socket.io');

const io=socketio();

const socketApi={
    io //--> ES6 io=io
};

io.on('connection',socket=>{
    console.log("a user logged in");
});

module.exports=socketApi;