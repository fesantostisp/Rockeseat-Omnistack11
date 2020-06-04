const knex = require('knex'); //database module
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config); //(configuration.development);

module.exports = connection; 