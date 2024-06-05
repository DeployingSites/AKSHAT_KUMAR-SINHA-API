
const express = require('express');
const music_router = require('./router/music_player_router')
const cors = require('cors')
const path = require('path')
const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/music-player',music_router)
server.use('/api/music-player/resource/music', express.static(path.join(__dirname, 'resource/music')));
server.use('/api/music-player/resource/img', express.static(path.join(__dirname, 'resource/img')));
server.use('/dashboard', express.static(path.join(__dirname, '/dashboard')));


server.get('/',async (req,res)=>{
    try{
        res.sendFile(path.join(__dirname,'/index.html'))
    }catch(error){
        console.log(error)
    }
})

server.listen(80,()=>{
    console.log('server listening on port 80')
})
