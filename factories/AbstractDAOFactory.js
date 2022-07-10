"use strict";
const MockDAOFactory = require("./mock/DAOFactory");
const MongoDBDAOactory = require("./mongodb/DAOFactory");
const PostgresDAOFactory = require("./postgres/DAOFactory");

const DAO_FACTORY_MAP = {
    "mock": MockDAOFactory,
    "mongodb": MongoDBDAOactory,
    "postgres": PostgresDAOFactory,
}

exports.getFactory = (factory) => {
    const concrete_factory = factory || process.env.DAO_FACTORY_TYPE || "mock";
    return DAO_FACTORY_MAP[concrete_factory];
}