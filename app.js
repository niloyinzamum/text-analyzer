const express = require('express')
const morgan = require('morgan')
const morganBody = require('morgan-body')
const path = require('path')
const mongoose = require('mongoose')

require('dotenv').config();
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan("combined"))
morganBody(app)

const uri = process.env.URI

mongoose.connect(uri)
const connection = mongoose.connection    

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', ()=>{
    console.log('DB connection succesful')
})

const textAnalyzer = require('./routes/textAnalyzer.route') 
app.use('/', textAnalyzer)
app.use('/words', textAnalyzer)
app.use('/characters', textAnalyzer)
app.use('/sentences', textAnalyzer)
app.use('/paragraphs', textAnalyzer)
app.use('/longest', textAnalyzer)

const analyzeHistory = require('./routes/analyzerHistory.route') 
app.use('/record', analyzeHistory)



app.listen(port, ()=>{
  console.log("server is running on port:"+ port)
})

    