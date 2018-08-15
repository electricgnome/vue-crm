'use strict';
module.exports = (sequelize, DataTypes) => {
  var note = sequelize.define('note', {
    note: DataTypes.JSON,
    created_by: DataTypes.STRING,
    is_task: DataTypes.BOOLEAN,
    category: DataTypes.STRING,
    due_date: DataTypes.DATEONLY,
    agent_responsible: DataTypes.INTEGER,
    status: DataTypes.STRING

  }, {});
  note.associate = function(models) {
      note.belongsTo(models.policy)
    // belongs to policy
  };
  return note;
};