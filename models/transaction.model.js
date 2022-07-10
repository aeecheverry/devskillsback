"use strict";
const  { Model, DataTypes, Sequelize } = require("sequelize");
const TRANSACTION_TABLE = "transactions";

const TransactionSchema = {
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    card_number: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.FLOAT
    },
    bar_code: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    pay_date: {
        type: DataTypes.DATE,
        field: "pay_date",
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}

class Transaction extends Model { 
    static associate() {
        //
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TRANSACTION_TABLE,
            modelName: "Transaction",
            timestamps: false
        }
    }

}

module.exports = {
    TRANSACTION_TABLE,
    TransactionSchema,
    Transaction
}
