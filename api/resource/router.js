// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})


router.post('/', async (req, res, next) =>{
    try {
        const resource = await Resources.insertResources(req.body)
        res.status(201).json(resource)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router