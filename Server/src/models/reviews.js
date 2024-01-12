const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Review", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              isInt: true,
              min: 1,
              max: 5,
            },
          },
    });
};
