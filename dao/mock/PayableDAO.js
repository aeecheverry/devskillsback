const DB = require("./DB").DB;

exports.PayableDAO = class PayableDAO {
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

    async list({ service_type }) {
        try{
            const query = {
                service_type
            }
            return await DB.list(this.collectionName, query);
        } catch (error) {
            throw error;
        }
    }
}