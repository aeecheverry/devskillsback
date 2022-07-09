"use strict";
const BusinessFactory = require("../factories/BusinessFactory");
const ticket_scheme = require("../schemas/ticket_scheme");
const transaction_scheme = require("../schemas/transaction_scheme");

const validate = require("jsonschema").validate;

exports.PayRoutes = class PayRoutes {
    constructor() {
        this.payBusiness = BusinessFactory.getFactory().getPayBusiness();
    }

    load(routes) {
        //Para implementar excepciones en la logica de negocio
        const getStatusCodeFromException = (exception) => {
            return exception instanceof InvalidEntitySchemaException ? 400 : exception instanceof AccessDeniedException ? 401 : exception instanceof EntityNotFoundException ? 404 : 500;
        }

        const response = (req, res, code, out) => {
            res.setHeader("Content-Type", "application/json");
            res.status(code).send({
                "code" : code,
                "message" : out
            });
        }

        routes.post("/tickets", async (req, res) => {
            try {
                console.log("Creating ticket...");
                const valid = validate(req.body, ticket_scheme);
                if(valid && valid.errors && valid.errors.length > 0) {
                    response(req, res, 400, valid.errors.toString());
                }else{
                    const ticketPay = req.body;
                    const ticket = await this.payBusiness.createTicket(ticketPay);
                    response(req, res, 201, ticket);
                }
            } catch (error) {
                console.error(error);
                response(req, res, 500, error.toString());
            }
        });

        routes.post("/tickets/pay", async (req, res) => {
            try {
                console.log("Paying tickets...", transaction_scheme);

                const valid = validate(req.body, transaction_scheme);
                if(valid && valid.errors && valid.errors.length > 0) {
                    response(req, res, 400, valid.errors.toString());
                }else{
                    const ticketPay = req.body;
                    const ticket = await this.payBusiness.payTicket(ticketPay);
                    response(req, res, 201, ticket);
                }
            } catch (error) {
                console.error(error);
                response(req, res, 500, error.toString());
            }
        });

        routes.get("/tickets", async (req, res) => {
            try {
                console.log("Listing payables...");
                const body = {
                    service_type: req.query.service_type,
                    from: req.query.from,
                    size: req.query.size
                };
                const ticket = await this.payBusiness.listPayables(body);
                response(req, res, 200, ticket);
            } catch (error) {
                console.error(error);
                response(req, res, 500, error.toString());
            }
        });

        routes.get("/tickets/pay", async (req, res) => {
            try {
                console.log("Listing transactions...");
                const body = {
                    from_date: req.params.from_date,
                    to_date: req.params.to_date
                };
                const ticket = await this.payBusiness.listTransactions(body);
                response(req, res, 200, ticket);
            } catch (error) {
                console.error(error);
                response(req, res, 500, error.toString());
            }
        });
    }
}