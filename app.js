
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to GitHub Actions Capstone Project!');
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        message: 'Application is running successfully'
    });
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

