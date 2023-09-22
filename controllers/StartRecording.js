const Data = require('../schema/RecordingSchema')

const StartRecording = async (req, res) => {

    try {
        const { userId,startTime } = req.body;

        const users = await Data.create({userId,startTime})

        res.status(201).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports={StartRecording}
