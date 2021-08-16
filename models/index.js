const User = require("./User");
const Timeid = require("./Timeid");
const Slots = require("./Slots");
const Service = require("./Service");

User.hasMany(Slots, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Slots.belongsTo(User, {
  foreignKey: "user_id",
});

//
Slots.belongsTo(Timeid, {
  foreignKey: "time_id",
});

Slots.belongsTo(Service, {
  foreignKey: "service_id",
});

module.exports = { User, Timeid, Slots, Service };
