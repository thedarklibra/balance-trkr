const balance = document.getElementById('balance-amount');
const list = document.getElementById('transaction-list');
const form = document.getElementById('expense-form');
const text = document.getElementById('expense-text');
const amount = document.getElementById('expense-amount');
const t_expense = document.getElementById('expense-ui');
const income = document.getElementById('income-amount');
var t_income = 400;
var expense = parseInt(t_expense.textContent);
var newItemText; 
income.textContent = t_income;
balance.textContent = parseInt(income.textContent) - expense;

function uiUpdate() {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = newItemText;
    list.appendChild(newListItem);
}

function calc() {
    expense = expense + parseInt(amount.value);
    t_expense.textContent = expense;
    newItemText = text.value + "<p class=\"amt-list\">-" + amount.value + "</p>";
    balance.textContent = parseInt(income.textContent) - expense;
    uiUpdate();
}
