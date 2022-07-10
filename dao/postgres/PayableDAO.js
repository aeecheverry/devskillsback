const DBConnectionFactory = require("../../factories/postgres/DBConnectionFactory");

exports.PayableDAO = class PayableDAO {
    constructor() {
        this.tableName = "tickets";
    }

    async create(ticket) {
        try{
            const  client = await DBConnectionFactory.getConnection();
            const data = await client.models.Ticket.create(ticket);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async update(ticket) {
        try{
            const  client = await DBConnectionFactory.getConnection();
            const data = await client.models.Ticket.update(ticket, { where: { bar_code: ticket.bar_code } });
            return data;
        } catch (error) {
            throw error;
        }
    }

    async list({ service_type }) {
        try{
            const client = await DBConnectionFactory.getConnection();
            let query = {
                attributes: ["service_type", "expiration_date", "amount", "bar_code"],
            };
            if(service_type) {
                query.where = { service_type, pay_status: "pending" };
                const index = query.attributes.indexOf("service_type");
                if(index > -1) {
                    query.attributes.splice(index, 1);
                }
            }
            const tickets = await client.models.Ticket.findAll(query);
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async getByBarCode(barCode) {
        try{
            const client = await DBConnectionFactory.getConnection();
            const ticket = await client.models.Ticket.findByPk(barCode);
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}