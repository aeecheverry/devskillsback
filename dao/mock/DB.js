"use strict";
const COLLECTIONS = {
    "Tickets" : [],
    "Transactions" : []
}

exports.DB = {
    insert: async (collectionName, ticket) => {
        console.log(COLLECTIONS, collectionName, ticket);
        COLLECTIONS[collectionName].push(ticket);
        return new Promise((resolve, reject) => {
            resolve(ticket);
        });
    },
    update: async (collectionName, ticket) => {
        console.log(COLLECTIONS, collectionName, ticket);
        COLLECTIONS[collectionName].push(ticket);
        return new Promise((resolve, reject) => {
            resolve(ticket);
        });
    },
    list: async (collectionName, query) => {
        const tickets = COLLECTIONS[collectionName];
        return new Promise((resolve, reject) => {
            resolve(tickets);
        });
    },
    getByBarCode: async (collectionName, barCode) => {
        const tickets = COLLECTIONS[collectionName];
        const ticket = tickets.find(ticket => ticket.bar_code === barCode);
        return new Promise((resolve, reject) => {
            resolve(ticket);
        });
    }
}