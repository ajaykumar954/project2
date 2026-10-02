const transactionForm =
    document.getElementById("transactionForm");

const transactionList =
    document.getElementById("transactionList");

transactionForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const description =
        document.getElementById("description").value;

    const amount =
        document.getElementById("amount").value;

    const type =
        document.getElementById("type").value;

    const transaction =
        document.createElement("li");

    transaction.textContent =
        `${description} - ₹${amount} (${type})`;

    transactionList.appendChild(transaction);

    transactionForm.reset();

});