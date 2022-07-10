const DB = require("./DB").DB;

"use strict";
exports.TransactionDAO = class TransactionDAO {
    constructor() {
        this.collectionName = "Tickets";
    }

    async create(ticket) {
        try{
            return await DB.insert(this.collectionName, ticket);
        } catch (error) {
            throw error;
        }
    }

    async list({ from_date, to_date }) {
        try{
            const query = {
                from_date,
                to_date
            }
            return await DB.list(this.collectionName, query);
        } catch (error) {
            throw error;
        }
    }

    async getByBarCode(barCode) {
        try{
            return await DB.getByBarCode(this.collectionName, barCode);
        } catch (error) {
            throw error;
        }
    }
}