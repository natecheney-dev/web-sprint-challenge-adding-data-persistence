// build your `/api/projects` router here
const Projects = require('./model')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})


module.exports = router;