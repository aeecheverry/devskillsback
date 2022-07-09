const express = require("express");
const bodyParser = require("body-parser");
const cors = require( "cors");
const RoutesFactory = require("../factories/RoutesFactory");
const app = express();
const router = new express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : true }));
router.use(cors());

RoutesFactory.createRoutes(router);

app.use("/v1", router);

exports.handler = () => {
    const server = app.listen(process.env.PORT || 3000, () => {
        let host = server.address().address;
        let port = server.address().port;
        console.log("Taxes app listening at http://%s:%s", host, port);
    });
}
