"use strict";
const  { Model, DataTypes, Sequelize } = require("sequelize");
const TICKET_TABLE = "tickets";

const TicketSchema = {
    id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    bar_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    service_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    expirationDate: {
        type: DataTypes.DATE,
        field: "expiration_date",
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    amount: {
        type: DataTypes.FLOAT
    },
    pay_status: {
        type: DataTypes.STRING
    }
}

class Ticket extends Model { 
    static associate() {
        //
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TICKET_TABLE,
            modelName: "Ticket",
            timestamps: false
        }
    }

}

module.exports = {
    TICKET_TABLE,
    TicketSchema,
    Ticket
}
