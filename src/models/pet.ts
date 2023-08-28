import { Model, InferAttributes, InferCreationAttributes, Sequelize, DataTypes, NOW } from "sequelize";

export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>> {
    declare petId: number;
    declare name: string;
    declare species: string;
    declare imgUrl: string;
    declare description: string;
    declare createdOn: Date;
    declare updatedOn: Date;
}

export function PetFactory(sequelize: Sequelize) {
    Pet.init({
        petId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdOn: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: NOW
        },
        updatedOn: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: NOW
        }
    }, {
        tableName: 'petDB',
        freezeTableName: true,
        sequelize
    });
}