
const {knex} = require('./db');

module.exports = {
    createCategory,
    getAll,
    getcategory
}

async function getAll(){
    return knex.select('CategoryId', 'Name').from('Categories');
}

async function createCategory(category){
    return knex('Categories').insert(category); 
}

async function getcategory(){
  return knex.select().from('Categories');
}