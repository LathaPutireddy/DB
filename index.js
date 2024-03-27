const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

// Connect to MongoDB database
mongoose.connect('mongodb+srv://chandrikaguntupalli2:chandu99@cluster0.trp076i.mongodb.net/MoneyTracker')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define schema and model for expenses
const expenseSchema = new mongoose.Schema({
    category: String,
    amount: Number,
    date: Date
});
const Expense = mongoose.model('Expense', expenseSchema);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Route to add expense
app.post('/addExpense', (req, res) => {
    const { category, amount, date } = req.body;
    
    // Log the received data
    console.log('Received data from client:', { category, amount, date });

    // Create new expense document
    const newExpense = new Expense({ category, amount, date });

    // Save new expense to database
    newExpense.save()
        .then(() => {
            console.log('Expense added successfully');
            res.status(201).send('Expense added successfully');
        })
        .catch(err => {
            console.error('Error adding expense:', err);
            res.status(500).send('Failed to add expense. Please try again.');
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

