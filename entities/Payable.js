"use strict";

exports.Payable = class Payable {
    constructor({id, service_type, description, expirationDate, amount, pay_status, bar_code}) {
        this.id = id;
        this.service_type = service_type;
        this.description = description;
        this.expirationDate = expirationDate;
        this.amount = amount;
        this.pay_status = pay_status;
        this.bar_code = bar_code;
    }

    setId(id) {
        this.id = id;
    }
    setServiceType(service_type) {
        this.service_type = service_type;
    }
    setDescription(description) {
        this.description = description;
    }
    setExpirationDate(expirationDate) {
        this.expirationDate = expirationDate;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    setPayStatus(pay_status) {
        this.pay_status = pay_status;
    }
    setBarCode(bar_code) {
        this.bar_code = bar_code;
    }



    toSharedModel(payable) {
        payable = payable || this;
        console.log("hola", payable)
        const output = new Payable({id:payable.id});
        output.setServiceType(payable.service_type);
        output.setExpirationDate(payable.expirationDate);
        output.setAmount(payable.amount);
        output.setBarCode(payable.bar_code);
        return output;
    }
}