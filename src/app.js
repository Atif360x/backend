const express = require('express');
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json())


app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({ 
        title: data.title,
        description: data.description
     })

     res.status(201).json({
        messege:"note created"
     })
})

app.get('/notes', async (req, res) => {

    const notes = await noteModel.find()

    // const notes = await noteModel.findOne({
    // title: "test note two" })

    res.status(200).json({
        messege: "notes fetched successfully",
        notes: notes
    })

})

app.delete('/notes/:id', async (req, res) => {

        const id = req.params.id

        await noteModel.findOneAndDelete({
            _id: id
        })

        res.status(200).json({  
            messege: "note deleted sucessfully"
        })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id

    const description = req.body.description

    await noteModel.findByIdAndUpdate
    ({
        _id: id
    },
    {
        description: description
    })

    res.status(200).json({
        messege: "note updated successfully"
    })

})


module.exports = app;