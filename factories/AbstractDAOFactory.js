const MockDAOFactory = require("./mock/DAOFactory");
const MongoDBDAOactory = require("./mongodb/DAOFactory");
const MySQLDAOFactory = require("./mysql/DAOFactory");

const DAO_FACTORY_MAP = {
    "mock": MockDAOFactory,
    "mongodb": MongoDBDAOactory,
    "mysql": MySQLDAOFactory,
}

exports.getFactory = (factory) => {
    const concrete_factory = factory || process.env.DAO_FACTORY_TYPE || "mock";
    return DAO_FACTORY_MAP[concrete_factory];
}