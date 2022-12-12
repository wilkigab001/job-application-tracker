const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
  Application: sequelize.define("application", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    jobTitle: DataTypes.STRING,
    applicationDate: DataTypes.INTEGER,
    hiringManager: DataTypes.STRING,
    interviewStatus: DataTypes.BOOLEAN,
    jobPostingLink: DataTypes.STRING,
  }),
};
