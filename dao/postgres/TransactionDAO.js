const DBConnectionFactory = require("../../factories/postgres/DBConnectionFactory");
const { Op } = require("sequelize");

exports.TransactionDAO = class TransactionDAO {
    constructor() {
        this.tableName = "transactions";
    }

    async create(transaction) {
        try{
            const  client = await DBConnectionFactory.getConnection();
            const data = await client.models.Transaction.create(transaction);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async list({ from_date, to_date }) {
        try{
            const client = await DBConnectionFactory.getConnection();
            let query = {
                attributes: [
                    [client.literal(`DATE("pay_date")`), "pay_date"],
                    [client.fn("sum", client.col("amount")), "total"],
                    [client.literal(`COUNT(*)`), "count"]
                ],
                group: ["pay_date"],
            };
            if(from_date && to_date) {
                query.where = {
                    [Op.and]: [
                        {
                            pay_date: {
                                [Op.gte]: from_date,
                                [Op.lte]: to_date
                            }
                        }
                    ]
                }
            }
            const transactions = await client.models.Transaction.findAll(query);
            return transactions;
        } catch (error) {
            throw error;
        }
    }

    async getByBarCode(barCode) {
        try{
            const client = await DBConnectionFactory.getConnection();
            const transaction = await client.models.Transaction.findByPk(barCode);
            return transaction;
        } catch (error) {
            throw error;
        }
    }
}
