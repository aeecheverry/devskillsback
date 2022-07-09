"use stric";
const { PayBusiness } = require("../business/PayBusiness");
const AbstractDAOFactory = require("./AbstractDAOFactory");

exports.getFactory = () => {
    const dependencies = {
        payableDao: AbstractDAOFactory.getFactory().getDAO("payable"),
        transactionDao: AbstractDAOFactory.getFactory().getDAO("transaction")
    }
    return {
        getPayBusiness: () => {
            return new PayBusiness(dependencies);
        }
    }
}