'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/sync_meeting',
    {
        logging: true,
        operatorsAliases: false
    });

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
}