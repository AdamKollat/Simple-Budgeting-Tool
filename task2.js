let income = [];    // Create empty array to store income objects in later
let expenses = [];  // Create empty array to store expense objects in later

function initialise() { // Run this the code has not run before
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {  // If code hasn't run before
        sessionStorage.setItem("income", JSON.stringify(income));   // Add the income array to sessionStorage
        sessionStorage.setItem("expenses", JSON.stringify(expenses));   // Add the expenses array to sessionStorage
        sessionStorage.setItem("hasCodeRunBefore", true);   // Update variable value to true
    } else {    // If the code has ran in the past
        income = JSON.parse(sessionStorage.getItem("income"));  // update income array with objects stored in sessionStorage array
        expenses = JSON.parse(sessionStorage.getItem("expenses"));  // update iexpenses array with objects stored in sessionStorage array
    }
}

function Income(name, amount, recurring) {  // Create a constructor function for income objects
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
}
// Create 5 different objects to represent income from different places
let income1 = income.push(new Income("Salary", 1000, true));
let income2 = income.push(new Income("Bonus", 200, false));
let income3 = income.push(new Income("Contract work", 150, false));
let income4 = income.push(new Income("Tutoring", 300, true));
let income5 = income.push(new Income("Blog income", 100, false));

function Expense(name, amount, recurring) { // Create a constructor function for expense objects
    this.name = name;
    this.amount = amount;
    this.recurring = recurring;
}
// Create 5 different objects to represent different expenses
let expense1 = expenses.push(new Expense("Rent", 500, true));
let expense2 = expenses.push(new Expense("Groceries", 300, true));
let expense3 = expenses.push(new Expense("Fuel", 100, true));
let expense4 = expenses.push(new Expense("Cinema", 30, false));
let expense5 = expenses.push(new Expense("Bowling", 25, false));

function display(array) {   // Create a function to display object values to users
    let output = '';    // Create emptry string variable
    for (let i = 0; i < array.length; i++) {    // Loop through array and use values in display string
        output += `Source: ${array[i].name}, amount: ${array[i].amount}, recurring: ${array[i].recurring}\n`
    }
    return output
}

function listIncome() { 
    let incomeQuestion;
    do {
        // Using a prompt box, display the income items and let the user add nother entry
        incomeQuestion = prompt(`List of all income:\n${display(income)}\nWould you like to add another income? (Y/N)`);
        if (incomeQuestion === 'Y' || incomeQuestion === 'y') { // If user wants to add another income object
            let name = prompt('Please enter source of income:');    // Ask user for income source
            let amount = Number(prompt('Please enter amount:'));    // Ask user or income amount
            let recurring = prompt('Recurring payment? (Y/N)'); // Ask user if income is recurring
            if (recurring === 'Y' || recurring === 'y') {   // If answer is yes update recurring value to true
                recurring = true;
            } else {    // If answer is no update recurring value to false
                recurring = false;
            }
            let newIncomeObject = new Income(name, amount, recurring);  // Create new income ubject using values provided by user
            income.push(newIncomeObject)    // Push new object to income array 
            sessionStorage.setItem("income", JSON.stringify(income));   // Update session storage using income array
        }
    }
    while (incomeQuestion === 'Y' || incomeQuestion === 'y')  // Repeat process as long as user wants to add new objects
}

listIncome()    // Call function

function listExpenses() {
    let expenseQuestion;
    do {
        // Using a prompt box, display the expense items and let the user add nother entry
        expenseQuestion = prompt(`List of all expenses:\n${display(expenses)}\nWould you like to add another expense? (Y/N)`);
        if (expenseQuestion === 'Y' || expenseQuestion === 'y') {   // If user wants to add another expense object
            let name = prompt('Please enter name of expense:'); // Ask user for name of expense
            let amount = Number(prompt('Please enter amount:')); // Ask user or expense amount
            let recurring = prompt('Recurring expense? (Y/N)'); // Ask user if expense is recurring
            if (recurring === 'Y' || recurring === 'y') {   // If answer is yes update recurring value to true
                recurring = true;
            } else {  // If answer is no update recurring value to false
                recurring = false;
            }
            let newExpenseObject = new Expense(name, amount, recurring);  // Create new expense ubject using values provided by user
            expenses.push(newExpenseObject);  // Push new object to income array
            sessionStorage.setItem("expenses", JSON.stringify(expenses));  // Update session storage using income array
        }
    } while (expenseQuestion === 'Y' || expenseQuestion === 'y')  // Repeat process as long as user wants to add new objects
}

listExpenses()  // Call function

function sumOfAllAmounts (array) {  // Create function to calculate sum of amounts stored in a given array
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i].amount
    }
    return result
}

// Calculate disposable income by deducting total expenses from total incpme
let dispIncome = sumOfAllAmounts(income) - sumOfAllAmounts(expenses);

// Display calculated disposable income and ask user how much do they want to set aside for savings
let savings = prompt(`Total disposable income: ${dispIncome}\nHow much of this amount would you like to set aside for savings?`);

// Calculate final amonut by deducting savings from disposable income amount
let finalAmonut = dispIncome - savings

// Display final amount to user
let finalTotal = alert(`Total disposable income after savings: ${finalAmonut}`)