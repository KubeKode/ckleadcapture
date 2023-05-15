const dbConfig = async () => {
    const sequelize = require('./database');
// Define models/schemas here
    // const User = require('../models/users')
    const result = await sequelize.sync();
}
module.exports = dbConfig;