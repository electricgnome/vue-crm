'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('task', {
    name: DataTypes.STRING,
    due: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  task.associate = function(models) {
    task.belongsTo(models.user);// associations can be defined here
  };
  return task;
};