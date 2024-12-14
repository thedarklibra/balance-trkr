const balance = document.getElementById('balance-amount');
const list = document.getElementById('transaction-list');
const form = document.getElementById('expense-form');
const text = document.getElementById('expense-text');
const amount = document.getElementById('expense-amount');
const t_expense = document.getElementById('expense-ui');
const income = document.getElementById('income-amount');
var t_income = document.getElementById('income');
var expense = parseInt(t_expense.textContent);
var newItemText; 
balance.textContent = parseInt(income.textContent) - expense;

function uiUpdate() {
    const newListItem = document.createElement("li");
    newListItem.innerHTML = newItemText;
    list.appendChild(newListItem);
}

function calc() {
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a text and amount.');
        return;
    } else {
    expense = expense + parseInt(amount.value);
    t_expense.textContent = expense;
    newItemText = text.value + "<p class=\"amt-list-neg\">-" + amount.value + "</p>";
    balance.textContent = parseInt(income.textContent) - expense;
    text.value = "";
    amount.value = "";
    uiUpdate();
    }
}

function calcInc() {
    if (t_income.value.trim() === '') {
        alert('Please add an amount.');
        return;
    } else {
    income.textContent = parseInt(income.textContent) + parseInt(t_income.value);
    balance.textContent = parseInt(income.textContent) - expense;
    newItemText = "Debit" + "<p class=\"amt-list-pos\">+" + t_income.value + "</p>";
    t_income.value = "";
    uiUpdate()
    }
}