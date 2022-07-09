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
    list: async (collectionName, query) => {
        const tickets = COLLECTIONS[collectionName];
        return new Promise((resolve, reject) => {
            resolve(tickets);
        });
    }
}