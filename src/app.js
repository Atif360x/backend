const express = require('express')
const app = express(); // create server instance
app.use(express.json())


const notes = [];

app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({ 
        messege: "note created sucessfully"
     })

})

app.get('/notes', (req, res) => {

    res.status(200).json({ 
        notes: notes
     })

})



app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const description = req.body.description

    notes[ index ].description = description

    res.status(200).json({  
        messege: "note updated successfully"
    })
})


app.delete('/notes/:index', (req, res) => {
    
    const index = req.params.index

    delete notes[ index ]

    res.status(200).json({  
        messege: "note deleted"
      })

})


module.exports = app