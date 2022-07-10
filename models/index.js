const { Ticket , TicketSchema } = require("./ticket.model");
const { Transaction , TransactionSchema } = require("./transaction.model");

const setUpModels = (sequelize) => {
    Ticket.init(TicketSchema, Ticket.config(sequelize));
    Transaction.init(TransactionSchema, Transaction.config(sequelize));
}

module.exports = setUpModels;