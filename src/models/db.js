const { Sequelize, DataTypes } = require('Sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    database: 'ikeaul',
    username: 'postgres',
    password: 'pentium@2'

})

const URLs  = db.define('urls', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    code: {
        type: DataTypes.STRING(7),
        unique: true

    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false

    }
})


module.exports = {
    db,
    URLs 
}