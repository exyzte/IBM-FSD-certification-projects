# Total Sales Calculator

This project is a simple front-end application that allows users to calculate total sales based on item names, quantities, and prices. It includes features for input validation and ensures that each product entry is correctly formatted.

## Project Structure

```
total-sales-calculator
├── src
│   ├── index.html          # Main HTML document
│   ├── styles
│   │   └── style.css      # Custom styles for the application
│   ├── scripts
│   │   └── app.js         # JavaScript logic for the calculator
│   └── assets
│       └── bootstrap
│           ├── bootstrap.min.css  # Minified Bootstrap CSS
│           └── bootstrap.min.js   # Minified Bootstrap JS
├── README.md              # Project documentation
```

## Features

- Input fields for item names, quantities, and prices.
- Validation to check for typos in item names.
- Ensures each product object contains the required parameters: item, quantity, and price.
- Responsive design using Bootstrap for a better user experience on various devices.

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```
   cd total-sales-calculator
   ```

3. **Open the `index.html` file in your browser to view the application.**

## Dependencies

- Bootstrap (included in the `src/assets/bootstrap` directory)

## Usage

- Enter the item name, quantity, and price in the respective input fields.
- Click the "Add Item" button to add the product to the list.
- The total sales will be calculated and displayed based on the entered items.

## License

This project is open-source and available under the MIT License.