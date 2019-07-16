const express = require('express');
const routes = new express.Router();

routes.get('/', (req, res) => {
    //res.send('<h1>API V1.0</h1>')
    res.json({ " API": "V1.0" })
})

module.exports = routes;