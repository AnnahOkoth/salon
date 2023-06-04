const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Middleware for parsing JSON request body
app.use(express.json());

// Initialize session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Simulated user data stored in MongoDB
const users = [
  { id: '1', username: 'user1', password: '$2b$10$ZqT3N9gjkLALOjsXs/6cJ.9kHPnJH...hashed-password...' },
  // Add more user data as needed
];

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database based on the username
  const user = users.find((u) => u.username === username);

  if (!user) {
    // User not found, return error response
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the provided password with the hashed password from the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    // Password does not match, return error response
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a unique session token
  const sessionToken = uuidv4();

  // Save the session token in the server-side session storage
  req.session.token = sessionToken;

  // Return the session token to the client
  res.json({ token: sessionToken });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
