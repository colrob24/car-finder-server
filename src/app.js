const express = require('express')
const mountRoutes = require('./routes')

var app = express();app.listen(3001, () => {
 console.log("Server running on port 3001");
});

mountRoutes(app)