// build your `Project` model here

const { get } = require('superagent')
const db = require('../../data/dbConfig')

async function getProjects() {
  const projects = await db("projects");
  return projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false,
    };
  });
}

async function getProjectById(project_id) {
    const rows = await db('projects')
        .where('project_id', project_id)

    return rows
}

const insertProject = async (project) => {
    const [id] = await db("projects").insert(project)
    return db("projects").where("project_id", id).first()
};

    
module.exports = {
    getProjects,
    getProjectById,
    insertProject
}