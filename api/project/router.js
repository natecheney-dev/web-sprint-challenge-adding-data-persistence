// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', (req, res, next) =>{
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})


module.exports = router;