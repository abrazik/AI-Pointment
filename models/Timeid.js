const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Timeid extends Model {}

Timeid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    timestring: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "timeid",
  }
);

module.exports = Timeid;
