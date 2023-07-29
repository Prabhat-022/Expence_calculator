# Expence_calculator


Here are the main features of the expense calculator:

1. HTML Elements: The code sets up various HTML elements using `document.getElementById()` to retrieve elements with specific IDs. These elements include the balance display, income display, expense display, transaction list, input form for adding new transactions, and a clear button to remove transactions.

2. Transactions Array: The app maintains a `transactions` array to store the individual transaction objects. Each transaction object has an `id`, `text` (description of the transaction), and `amount` (the value of the transaction, positive for income and negative for expenses).

3. Dummy Transactions: The code provides a sample set of `dummyTransactions`, representing some initial data. This data is used to populate the transaction list on the page load if there are no transactions stored in the local storage.

4. Local Storage: The app uses the browser's local storage to store the `transactions` array as a JSON string. This ensures that the user's transactions persist across page reloads.

5. Adding Transactions: The `addTransactions()` function is responsible for adding new transactions. It validates the input fields (transaction text and amount) and, if valid, creates a new transaction object, adds it to the `transactions` array, updates the DOM to display the new transaction, clears the input fields, and updates the balance, income, and expense values.

6. Generating ID: The `generateID()` function generates a random unique ID for each transaction using `Math.random()` and `Math.floor()`.

7. Displaying Transactions: The `addTransactionDOM()` function adds a new transaction to the DOM by creating an `<li>` element and appending it to the transaction list (`<ul>`). The transaction text, amount, and a delete button are displayed within the list item. The list item's class is set to 'plus' for income transactions and 'minus' for expense transactions to style them accordingly.

8. Updating Values: The `updateValues()` function calculates the total balance, total income, and total expenses based on the transactions and updates these values in the DOM.

9. Removing Transactions: The `removeTransaction(id)` function removes a specific transaction from the `transactions` array based on its ID. It then updates the local storage and reinitializes the app to reflect the updated transactions.

10. App Initialization: The `Init()` function clears the transaction list in the DOM, adds each transaction from the `transactions` array to the DOM using `addTransactionDOM()`, and updates the balance, income, and expense values.

11. Event Listeners: Event listeners are set up for the form submit and clear button click events to call `addTransactions()` and `clearHistory()`, respectively.

Note: The `clearHistory()` function, as implemented, removes all transactions instead of clearing a specific transaction's history. This behavior may not be desired in a real-world application.

Overall, the expense calculator app provides a simple way for users to keep track of their income and expenses and view their current financial status. However, for production use, additional features, error handling, and improvements may be necessary.

# live: https://ex-calculator.netlify.app/
