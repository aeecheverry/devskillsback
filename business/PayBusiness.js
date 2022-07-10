"use strict";
const { Payable } = require("../entities/Payable");
const { Transaction } = require("../entities/Transaction");
const uniqid = require("uniqid");

exports.PayBusiness = class PayBusiness {
    constructor({payableDao, transactionDao}) {
        this.payableDao = payableDao;
        this.transactionDao = transactionDao;
    }

    async createTicket(ticket) {
        console.log("Input: " + JSON.stringify(ticket));
        let output;
        try {
            const ticket_by_bar_code = await this.payableDao.getByBarCode(ticket.bar_code);
            console.log("ticket_by_bar_code: "+ ticket.bar_code);
            if(ticket_by_bar_code) {
                throw new Error("Ticket already exists with that bar_code");
            }
            const id = uniqid();
            ticket.id = id;
            await this.payableDao.create(ticket);
            output = {
                barcode: ticket.bar_code
            };
            return output;
        } catch (error) {
            throw error;
        }
    }

    async payTicket(transaction) {
        console.log("Input: " + JSON.stringify(transaction));
        let output;
        try {
            const transaction_by_bar_code = await this.transactionDao.getByBarCode(transaction.bar_code);
            console.log("transaction_by_bar_code: "+ transaction.bar_code);
            if(transaction_by_bar_code) {
                throw new Error("Payment already exists with that bar_code");
            }
            const id = uniqid();
            transaction.id = id;
            await this.transactionDao.create(transaction);
            await this.payableDao.update({ pay_status: "paid", bar_code: transaction.bar_code });
            output = {
                id
            };
            return output;
        } catch (error) {
            throw error;
        }
    }

    async listPayables({ service_type }) {
        console.log("Input: " + service_type);
        let output;
        try {
            const tickets = await this.payableDao.list({ service_type });
            if(!tickets || tickets.length === 0) {
                throw new Error("No tickets found");
            }
            output = tickets;
            return output;
        } catch (error) {
            throw error;
        }
    }

    async listTransactions({ from_date, to_date }) {
        console.log("Input: ", JSON.stringify({from_date, to_date}));
        let output;
        try {
            const transactions = await this.transactionDao.list({ from_date, to_date });
            if(!transactions || transactions.length === 0) {
                throw new Error("No transactions found");
            }
            output = transactions;
            return output;
        } catch (error) {
            throw error;
        }
    }
}