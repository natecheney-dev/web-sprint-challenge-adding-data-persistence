// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources(){
    return db('resources')
}

async function insertResources(resources){
    const [id] = await db("resources").insert(resources)
    return db("resources").where("resource_id", id).first()
}

module.exports = {
    getResources,
    insertResources
}