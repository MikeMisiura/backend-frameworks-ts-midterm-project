import { Sequelize } from 'sequelize';
import { PetFactory } from './pet';


const dbName = 'petDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'sqlite'
});

// const sequelize = new Sequelize('sqlite::memory:')

PetFactory(sequelize);

export const db = sequelize;