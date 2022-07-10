"use strict";

exports.Transaction = class Transaction {
    constructor({id, payment_method, card_number, amount, bar_coude, pay_date}) {
        this.id = id;
        this.payment_method = payment_method;
        this.card_number = card_number;
        this.amount = amount;
        this.bar_coude = bar_coude;
        this.pay_date = pay_date;
    }

    setId(id) {
        this.id = id;
    }
    setPaymentMethod(payment_method) {
        this.payment_method = payment_method;
    }
    setCardNumber(card_number) {
        this.card_number = card_number;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    setPayDate(pay_date) {
        this.pay_date = pay_date;
    }

    toSharedModel(transaction) {
        transaction = transaction || this;
        const output = new Transaction();
        output.setId(transaction.id);
        output.setPaymentMethod(transaction.payment_method);
        output.setCardNumber(transaction.card_number);
        output.setAmount(transaction.amount);
        output.setPayDate(transaction.pay_date);
        return output;
    }
}