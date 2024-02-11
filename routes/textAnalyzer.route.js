const router = require('express').Router()
const fs = require('fs').promises
const db = require('../models/textAnalyzer.model')


let words = async () => {
    try {
        const data = await fs.readFile('sample.txt', 'utf8')
        const trimmedText = data.trim()
        const words = trimmedText.split(/\s+/)
        const length = words.length
        await db.findOne({'text':trimmedText})
            .then(data=>{
                if(!data){
                    const text = new db({
                        text: trimmedText
                    })
                    text.save()
                        .then(()=>{
                            db.findOneAndUpdate({'text':trimmedText}, {'words':length})
                            .then((data)=>{
                                console.log(length)
                            }).catch((err)=>{
                                console.log(err)
                            })
                        })
                            .catch((err)=>{
                                console.log(err)
                            })
                }else{

                }
            })
            .catch(err=>{console.log(err)})
            return words.length;
        } catch (err) {
            console.error(err);
            return "File not found!"
        }

};

let characters = async () => {
    try {
        const data = await fs.readFile('sample.txt', 'utf8')
        const trimmedText = data.trim()
        return trimmedText.length

        } catch (err) {
            console.error(err)
            return "File not found!"
        }

};

let sentences = async () => {
    try {
        const data = await fs.readFile('sample.txt', 'utf8')
        const trimmedText = data.trim()
        const sentences = trimmedText.split(/[.!?]+/).filter(sentence => sentence.trim() !== '')

        index = sentences.map((sentence, index)=>{
        if (sentence!="")
        return index
        })
        return index.length-1

        } catch (err) {
            console.error(err);
            return "File not found!"
        }
};

let paragraphs = async () => {
    try {
        const data = await fs.readFile('sample.txt', 'utf8')
        const trimmedText = data.trim()
        const paragraphs = data.split('\n\n')

        return paragraphs.length

        } catch (err) {
            console.error(err)
            return "File not found!"
        }
};

let longestWords = async () => {
    try {
        const data = await fs.readFile('sample.txt', 'utf8')
        const trimmedText = data.trim()
        const words = trimmedText.split(/\s+/)
        let longestWords = []
        let longestLength = 0
        
        words.forEach(word => {
            const wordLength = word.length
            if (wordLength > longestLength) {
                longestWords = [word]
                longestLength = wordLength
            } else if (wordLength === longestLength && !longestWords.includes(word)) {
                longestWords.push(word)
            }
        });

        return longestWords;
    } catch (err) {
        console.error(err);
        return "File not found!"
    }
};


router.route('/words').get(async(req, res)=>{
    res.json({
        words: await words()
    })
})

router.route('/characters').get(async(req, res)=>{
    res.json({
        characters: await characters()
    })
})

router.route('/sentences').get(async(req, res)=>{
    res.json({
        sentences: await sentences()
    })
})

router.route('/paragraphs').get(async(req, res)=>{
    res.json({
        paragraphs: await paragraphs()
    })
})

router.route('/longest').get(async(req, res)=>{
    res.json({
        longestWord: await longestWords()
    })
})

module.exports = router