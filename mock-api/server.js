const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock Data
const users = [
    { id: '1', email: 'mj@gmail.com', password: 'mj123', name: 'Test User' }
];

// Login Endpoint
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`Login attempt: ${email}`);

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({
            token: 'mock-jwt-token-12345',
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Tee Access Endpoint
app.post('/api/tee-access', (req, res) => {
    const data = req.body;
    console.log('Tee Access Submission:', data);

    // Simulate processing
    if (data.fullName && data.phoneNumber && data.gender && data.handicap) {
        res.status(200).json({
            message: 'Tee Access submitted successfully!',
            data: data
        });
    } else {
        res.status(400).json({ message: 'Missing required fields' });
    }
});

app.listen(PORT, () => {
    console.log(`Mock API Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  POST http://localhost:5000/api/auth/login');
    console.log('  POST http://localhost:5000/api/tee-access');
});
