// models/Diary.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Diary extends Model {}

Diary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    // Add any additional attributes specific to the diary entries
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'diary',
  }
);

module.exports = Diary;
