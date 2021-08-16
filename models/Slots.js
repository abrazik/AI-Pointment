const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Slots extends Model {}

Slots.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //   slots will be one hour, from 10-100. Slot 10 = 7:00-8:00,
      references: {
        model: "timeid",
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "service",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "slots",
  }
);

module.exports = Slots;
