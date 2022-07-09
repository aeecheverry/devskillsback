"use strict";

const PayableDAO = require("../../dao/mock/PayableDAO").PayableDAO;
const TransactionDAO = require("../../dao/mock/TransactionDAO").TransactionDAO;

const DAO_MAP = {
    "payable": PayableDAO,
    "transaction": TransactionDAO
}

exports.getDAO = (type) => {
    const DAO = DAO_MAP[type];
    return new DAO();
}

exports.getDAOPayanment = () => {
    return new PayableDAO();
}

exports.getDAOTransaction = () => {
    return new TransactionDAO();
}
