const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const Clear = document.getElementById('clear');


const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
];
const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
);


let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

//Add transactions 
function addTransactions(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a shoping item name  and amount')
    }
    else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        text.value = '';
        amount.value = '';
        updateValues();

        updateLocalStorage();
      
    }

}

function generateID() {
    return Math.floor(Math.random() * 100000000);
}
function addTransactionDOM(transaction) {
    //Get sign

    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li')
    // Add class based on value

    item.classList.add(transaction.amount< 0 ? 'minus': 'plus');

    item.innerHTML =`${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class ="delete-btn" onclick = "removeTransaction(${transaction.id})">X</button>`;

    list.appendChild(item);

}
// Update the balance, income and expense
function updateValues(){
    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) =>(acc += item), 0).toFixed(2);

    const income = amounts.filter(item => item > 0)
    .reduce((acc, item) =>(acc += item), 0).toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
      ).toFixed(2);

    balance.innerHTML = `$${total}`;
    money_plus.innerHTML = `$${income}`;
    money_minus.innerHTML = `$${expense}`;
} 

// //Clear History 


// RemoveTransaction by ID
function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();

    Init();
}


// Update Local Storage transaction
function updateLocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function Init() {
    list.innerHTML =" ";
    transactions.forEach(addTransactionDOM);
    updateValues();
}
Init();

function clearHistory() {
    removeTransaction();
 }
 
form.addEventListener('submit', addTransactions);
Clear.addEventListener('click', clearHistory);