// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

// [POST] /api/tasks
router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.insertTask(req.body)
        res.status(201).json({
            task_id: newTask.task_id,
            task_description: newTask.task_description,
            task_notes: newTask.task_notes,
            task_completed: newTask.task_completed == 0 ? false : true,
            project_id: newTask.project_id
        })
    } catch (err) {
        next(err)
    }
})

















module.exports = router