// build your `Task` model here
const db = require('../../data/dbConfig')


async function getTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')

    return tasks.map(task => ({
        ...task,
        task_completed: task.task_completed ? true : false
    }))
}


async function insertTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .where('task_id', task_id)
        .select('t.*')
        .first()
}

module.exports = {
    getTasks,
    insertTask
}