const { Schema, model } = require("mongoose");

const expenseSchema = new Schema({});

const Expense = model("Expense", expenseSchema);
module.exports = Expense;
