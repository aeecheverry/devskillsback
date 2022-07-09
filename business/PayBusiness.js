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
            const id = uniqid();
            ticket.id = id;
            //const ticketObj = new Payable(ticket);
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
            const id = uniqid();
            transaction.id = id;
            //const transactionObj = new Transaction(transaction);
            await this.transactionDao.create(transaction);
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
            //output = new Payable().toSharedModel(tickets);
            output = tickets;
            console.log("Output: ", output);
            return output;
        } catch (error) {
            throw error;
        }
    }

    async listTransactions({ from_date, to_date }) {
        console.log("Inpunt: ", JSON.stringify({from_date, to_date}));
        let output;
        try {
            const transactions = await this.transactionDao.list({ from_date, to_date });
            if(!transactions || transactions.length === 0) {
                throw new Error("No transactions found");
            }
            //output = new Transaction().toSharedModel(transaction);
            output = transactions;
            return output;
        } catch (error) {
            throw error;
        }
    }
}