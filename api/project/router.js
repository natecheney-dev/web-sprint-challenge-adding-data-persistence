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
        const newProject = await Projects.insertProject(req.body)
        res.status(201).json({
            project_id: newProject.project_id,
            project_name: newProject.project_name,
            project_description: newProject.project_description,
            project_completed: newProject.project_completed === 0 ? false : true
        })
    } catch (err) {
        next(err)
    }
})




module.exports = router;