const mongoose = require('mongoose');

const recordingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
  
    recordingType: {
        type: String, 
        default: 'WebCam',
    },
    fileSize: {
        type: Number, 
    },
    fileName: {
        type: String, 
    },
    storageLocation: {
        type: String, 
        default: 'local',
    },
    audioPermission: {
        type: Boolean,
        default:true
    },
    status: {
        type: String, 
        default: 'In progress',
    },


});

const Recording = mongoose.model('Recording', recordingSchema);

module.exports = Recording;
