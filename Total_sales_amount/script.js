
document.getElementById('sales-form').onsubmit = function(e) {

    e.preventDefault();



    // Get form values

    const item = document.getElementById('item').value.trim();

    const quantity = parseInt(document.getElementById('quantity').value, 10);

    const price = parseFloat(document.getElementById('price').value);



    // Validate inputs

    if (!item || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {

        alert('Please enter valid item details.');

        return;

    }



    // Add item to the list

    const itemsList = document.getElementById('items-list');

    const listItem = document.createElement('li');

    listItem.className = 'list-group-item';

    listItem.textContent = `${item} - Quantity: ${quantity}, Price: $${price.toFixed(2)}`;

    itemsList.appendChild(listItem);



    // Update total sales

    const totalSalesElement = document.getElementById('total-sales');

    const currentTotal = parseFloat(totalSalesElement.textContent);

    const newTotal = currentTotal + (quantity * price);

    totalSalesElement.textContent = newTotal.toFixed(2);



    // Clear form inputs

    document.getElementById('sales-form').reset();

};
