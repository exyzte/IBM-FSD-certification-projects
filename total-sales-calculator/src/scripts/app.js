// This file contains the JavaScript logic for the total sales calculator. 
// It handles user input for item names, quantities, and prices, checks for typos, 
// and manages the array of products. It ensures that each product object has 
// the required parameters: item, quantity, and price.

const products = [];

document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('itemName').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value.trim());
    const price = parseFloat(document.getElementById('price').value.trim());

    if (!itemName || !quantity || !price) {
        alert('Please fill in all fields correctly.');
        return;
    }

    if (!isNaN(quantity) && quantity > 0 && !isNaN(price) && price > 0) {
        const product = {
            item: itemName,
            quantity: quantity,
            price: price
        };
        
        products.push(product);
        updateTotalSales();
        clearForm();
    } else {
        alert('Quantity and price must be positive numbers.');
    }
});

function updateTotalSales() {
    const totalSales = products.reduce((total, product) => total + (product.quantity * product.price), 0);
    document.getElementById('totalSales').innerText = `Total Sales: $${totalSales.toFixed(2)}`;
}

function clearForm() {
    document.getElementById('itemName').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
}