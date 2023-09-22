const express = require('express');

const user = express();

const recordingStart= require("../controllers/StartRecording")
const stopRecording=require("../controllers/StopRecording")


user.get('/', (req, res) => {
    res.send("Welcome to Home Route")
});

user.post('/startrecording', recordingStart.StartRecording);


user.put('/stoprecording', stopRecording.StopRecording)


module.exports = {
    user
}