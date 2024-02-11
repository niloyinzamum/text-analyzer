const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textAnalyzerSchema = new Schema({
    text: {
        type: String,
        required: false
    },
    words: {
        type: Number,
        required: false
    },
    characters: {
        type: String,
        required: false
    },
    sentences: {
        type: String,
        required: false
    },
    paragraphs: {
        type: String,
        required: false
    },
    longestWords: {
        type: String,
        required: false
    },

})

const textAnalyzer = mongoose.model('texts', textAnalyzerSchema)

module.exports = textAnalyzer