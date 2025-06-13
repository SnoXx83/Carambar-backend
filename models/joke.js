import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Joke = sequelize.define('Joke', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    response:{
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
}, {
    timestamps: true,
});

export default Joke;