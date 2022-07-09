"use stric";
const { PayRoutes } = require("../routes/PayRoutes");

exports.createRoutes = (routes) => {
    console.log("Creating routes...");
    new PayRoutes().load(routes);
}
