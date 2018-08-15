'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    // phone: DataTypes.STRING,
    // email: DataTypes.STRING,
    contact: DataTypes.JSON,
    gender: DataTypes.BOOLEAN,
    marital_status: DataTypes.STRING,
    occupation: DataTypes.STRING,
    // relation: DataTypes.STRING,
    id_type: DataTypes.STRING,
    id_number: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    tickets:  DataTypes.INTEGER,
    accidents:  DataTypes.INTEGER,
    at_fault:  DataTypes.BOOLEAN,
    pref_lang: DataTypes.STRING,
    home_owner: DataTypes.BOOLEAN,
    has_pop: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};