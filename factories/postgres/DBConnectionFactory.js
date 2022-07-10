"use strict";
const { Sequelize } = require("sequelize");
const setUpModels = require("../../models");
let client = null;

exports.getConnection = async () =>{
    if(client === null){
        const USER = encodeURIComponent(process.env.DB_USER);
        const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
        const URI = `postgres://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`;
        console.log(URI);
        client = new Sequelize(URI, {  
            dialect: "postgres"
        }); 
    }
    setUpModels(client);
    client.sync();
    return client;
}

