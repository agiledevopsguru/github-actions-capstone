
const { test } = require('node:test');
const assert = require('node:assert');
const app = require('./app');

test('Health endpoint should return healthy status', async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://localhost:${port}/health`
        );

        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.status, 'healthy');

    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => {
                if (error) reject(error);
                else resolve();
            });
        });
    }
});

