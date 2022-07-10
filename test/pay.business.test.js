const BusinessFactory = require("../factories/BusinessFactory");
const AbstractDAOFactory = require("../factories/AbstractDAOFactory");
const expect = require("chai").expect;

const dependencies = {
    payableDao: AbstractDAOFactory.getFactory().getDAO("payable"),
    transactionDao: AbstractDAOFactory.getFactory().getDAO("transaction")
}

describe("PayBusiness", () => {
    const payBusiness = BusinessFactory.getFactory().getPayBusiness();

    it("should create a ticket", async () => {
        const ticket = {
            service_type: "luz",
            description: "recibo de luz",
            expirationDate: "2022-07-15",
            amount: 20000,
            pay_status: "pending",
            bar_code: "000001"
        }
        const output = await payBusiness.createTicket(ticket);
        expect(output.barcode).to.equal(ticket.bar_code);
    }).timeout(10000);

    it("should pay a ticket", async () => {
        const transaction = {
            payment_method: "cash",
            card_number: "0000-1111-2222-3333",
            amount: 20000,
            bar_code: "00000",
            pay_date: "2022-07-15"
        }
        const output = await payBusiness.payTicket(transaction);
        expect(output.id).toBeDefined();
    }).timeout(10000);

    it("should list payables", async () => {
        const output = await payBusiness.listPayables({ service_type: "luz" });
        expect(output.length).toBeGreaterThan(0);
    }).timeout(10000);

    it("should list transactions", async () => {
        const output = await payBusiness.listTransactions({from_date: "2022-01-01", to_date: "2022-07-31"});
        expect(output.length).toBeGreaterThan(0);
    }).timeout(10000);
});