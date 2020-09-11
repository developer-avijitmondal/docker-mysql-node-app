'use strict';
module.exports = (sequelize, DataTypes) => {
  const franchises_businessunitgroup = sequelize.define('franchises_businessunitgroup', {
    businessunitgroupname: DataTypes.STRING,
    createdby: DataTypes.INTEGER,
    updatedby: DataTypes.INTEGER
  }, {});
  franchises_businessunitgroup.associate = function(models) {
    // associations can be defined here
  };
  return franchises_businessunitgroup;
};