const router = require('express').Router()
const db = require('../models/textAnalyzer.model')

let history = async () => {
    try {
      result = await db.find()
        .then((data)=>{
            console.log(data)
            return data
        })
        } catch (err) {
            return "No History!"
        }

       return result 
};


router.route('/history').get(async(req, res)=>{
    res.json({
        history: await history()
    })
})

module.exports = router