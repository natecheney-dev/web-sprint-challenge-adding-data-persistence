// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const project = await Projects.insertProject(req.body)
        res.status(201).json({
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed == 0 ? false : true
        })
    } catch (err) {
        next(err)
    }
})




module.exports = router;