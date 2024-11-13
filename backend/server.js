



const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for frontend running on http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',  // Adjust if you have a different frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

// Your other middleware and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Example route
app.get('/', (req, res) => {
  res.send('Backend is working');
});

// Example route for your signup (change to your actual route)
app.post('/signup', (req, res) => {
  // Handle signup logic here
  res.json({ message: 'Signup successful' });
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
