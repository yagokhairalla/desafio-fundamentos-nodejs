"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    /* public all(): Transaction[] {
      // TODO
    }
  
    public getBalance(): Balance {
      // TODO
    } */
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        // TODO
        var transaction = {
            id: uuidv4_1.uuid(),
            title: title,
            value: value,
            type: type
        };
        this.transactions.push(transaction);
        return transaction;
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
