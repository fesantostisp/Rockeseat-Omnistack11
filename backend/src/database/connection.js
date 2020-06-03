const knex = require('knex'); //database module
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection; 