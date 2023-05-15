const mysql = require("mysql2");
const Sequelize = require('sequelize');
const config = require("../config/config")
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPwd, {
    dialect: 'mysql',
    host: config.dbHost,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    },
    timezone: '+05:30'
})
module.exports = sequelize;
