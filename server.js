
const express = require('express');
const music_router = require('./router/music_player_router')
const cors = require('cors')
const path = require('path')
const server = express();


server.use(cors());
server.use(express.json());
server.use('/api/music-player',music_router)
server.use('/resource/music', express.static(path.join(__dirname, 'resource/music')));
server.use('/resource/img', express.static(path.join(__dirname, 'resource/img')));

server.get('/',async (req,res)=>{
    try{
        res.send("Welcome to Akshat kumar Sinha's Api")
    }catch(error){
        console.log(error)
    }
})

server.listen(80,()=>{
    console.log('server listening on port 80')
})
