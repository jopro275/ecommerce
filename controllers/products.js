const { knex } = require('./db');

module.exports = {
    create,
    getAll,
    getproducts
}

async function getAll() {
    return knex.select().from('Products');
}

async function create(data) {
    return knex('Products').insert(data);
}

async function getproducts() {
    return knex.select().from('products');
}