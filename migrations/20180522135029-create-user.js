'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        
      },
      personal_email: {
        type: Sequelize.STRING,
        
      },
      phone: {
        type: Sequelize.STRING,
        
      },
      personal_phone: {
        type: Sequelize.STRING,
        
      },
      active: {
        type: Sequelize.BOOLEAN,
        
      },
      passcrypt: {
        type: Sequelize.STRING(40106)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};