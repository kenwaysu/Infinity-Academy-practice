import express from 'express'
import mysql2 from 'mysql2'
import sequelizePackage from 'sequelizePackage'
const {DataTypes, Model, Sequelize } = sequelizePackage

const sequelize = new Sequelize('todolist', 'root', 'subo2882',{
    host: 'localhost',
    dialect: 'mysql'
})

const app = express()
app.use(express.json())

const port = 3000

try {
    await sequelize.authenticate()
    console.log('connect to mysql server')
} catch (error) {
    console.error('cannot connect to mysql server')
}

class todo extends Model {}

todo.init(
  {
    id:{ type: DataTypes.INTEGER},
    title:{ type: DataTypes.STRING}
  },
  { sequelize, modelName: 'todo', tableName: 'users'}
)

