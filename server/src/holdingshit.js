{
    "name": "nasa-project-2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "install-server": "npm install --prefix server",
        "install-client": "npm install --prefix client",
        "install": "npm run install-server && npm run install-client",
        "server": "npm run dev --prefix server",
        "client": "npm start --prefix client",
        "watch": "npm run server & npm run client"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
