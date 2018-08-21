"use strict";
module.exports = (sequelize, DataTypes) => {
  var policyVehicle = sequelize.define("policyVehicle", {}, {});
  policyVehicle.associate = function(models) {
    policyVehicle.belongsTo(models.policy);
    policyVehicle.belongsTo(models.vehicle);
  };
  return policyVehicle;
};
