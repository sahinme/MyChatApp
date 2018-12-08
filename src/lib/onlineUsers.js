const redis=require('redis');

function onlineUsers(){
    this.client=redis.createClient({
        host:process.env.REDIS_URI,
        port:process.env.REDIS_PORT
    });
};

module.exports=new onlineUsers();

onlineUsers.prototype.upsert=function (connectionId,userData){
    this.client.hset(
        'online',
        userData.googleId,
        JSON.stringify({
            connectionId,
            userData,
            when:Date.now
        }),
        err=>{
            if (err){
                console.log(err);
            }
        }
    )
};

onlineUsers.prototype.remove=function (googleId) {
    this.client.hdel(
        'online',
        googleId,
        err=>{
            if(err){
                console.log(err);
            }
        }
    )  
};