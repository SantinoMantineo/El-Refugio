const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Reserva", {
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
            type: DataTypes.STRING ,
            allowNull: false,
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaLlegada: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        fechaSalida: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        personas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pagado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plan: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        estadiaTerminada: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
