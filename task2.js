let income = [];
let expenses = [];

function initialise() {
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("income", JSON.stringify(income));
        sessionStorage.setItem("expenses", JSON.stringify(expenses));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        income = JSON.parse(sessionStorage.getItem("income"));
        expenses = JSON.parse(sessionStorage.getItem("expenses"));
    }
}

function Income(name, amount, recurring) {
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
}

let income1 = income.push(new Income("Salary", 1000, true));
let income2 = income.push(new Income("Bonus", 200, false));
let income3 = income.push(new Income("Contract work", 150, false));
let income4 = income.push(new Income("Tutoring", 300, true));
let income5 = income.push(new Income("Blog income", 100, false));

function Expense(name, amount, recurring) {
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
}

let expense1 = expenses.push(new Expense("Rent", 500, true));
let expense2 = expenses.push(new Expense("Groceries", 300, true));
let expense3 = expenses.push(new Expense("Fuel", 100, true));
let expense4 = expenses.push(new Expense("Cinema", 30, false));
let expense5 = expenses.push(new Expense("Bowling", 25, false));

function display(array) {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        output += `Source: ${array[i].name}, amount: ${array[i].amount}, recurring: ${array[i].recurring}\n`
    }
    return output
}

function listIncome() {
    let incomeQuestion;
    do {
        incomeQuestion = prompt(`List of all income:\n${display(income)}\nWould you like to add another income? (Y/N)`);
        if (incomeQuestion === 'Y' || incomeQuestion === 'y') {
            let name = prompt('Please enter source of income:');
            let amount = prompt('Please enter amount:');
            let recurring = prompt('Recurring payment? (Y/N)');
            if (recurring === 'Y' || recurring === 'y') {
                recurring = true;
            } else {
                recurring = false;
            }
            let newIncomeObject = new Income(name, amount, recurring);
            income.push(newIncomeObject)
            sessionStorage.setItem("income", JSON.stringify(income));
        }
    }
    while (incomeQuestion === 'Y' || incomeQuestion === 'y')
}

listIncome()

function listExpenses() {
    let expenseQuestion;
    do {
        expenseQuestion = prompt(`List of all expenses:\n${display(expenses)}\nWould you like to add another expense? (Y/N)`);
        if (expenseQuestion === 'Y' || expenseQuestion === 'y') {
            let name = prompt('Please enter name of expense:');
            let amount = prompt('Please enter amount:');
            let recurring = prompt('Recurring expense? (Y/N)');
            if (recurring === 'Y' || recurring === 'y') {
                recurring = true;
            } else {
                recurring = false;
            }
            let newExpenseObject = new Expense(name, amount, recurring);
            expenses.push(newExpenseObject);
            sessionStorage.setItem("expenses", JSON.stringify(expenses));
        }
    } while (expenseQuestion === 'Y' || expenseQuestion === 'y')
}

listExpenses()