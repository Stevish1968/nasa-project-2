const http = require('http');
const app = require('./app');

require('dotenv').config();

const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();

    server.listen(process.env.PORT, () => {
        console.log(`listening on ${process.env.PORT} `);
    });
}
startServer();
