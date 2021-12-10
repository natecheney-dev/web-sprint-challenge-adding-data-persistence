// build your `Project` model here

const db = require('../../data/dbConfig')

const getProjects = () => {
    return db('projects')
}

async function getProjectById(project_id) {
    const rows = await db('projects')
        .where('project_id', project_id)
        
    return rows
}


module.exports = {
    getProjects
}