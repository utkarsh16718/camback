const Data = require('../schema/RecordingSchema');

const StopRecording = async (req, res) => {
    try {
        const {_id , endTime, fileSize, status, fileName, } = req.body;

     
        const recording = await Data.findOneAndUpdate(
            { _id},
            {
                $set: {
                    endTime,
                    fileSize,
                    status,
                    fileName
                }
            },
            { new: true } 
        );

        if (!recording) {
            return res.status(404).json({ error: 'Recording not found' });
        }

        res.status(201).json(recording);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { StopRecording };
