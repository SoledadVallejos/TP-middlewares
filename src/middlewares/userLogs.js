const fs = require('fs');
const path = require('path');

/* Creo mi middeleware */
module.exports = (req, res, next) => {
    fs.appendFileSync(path.join(__dirname, '..', 'logs', 'userLogs.txt'), 'El usuario ingreso a la ruta ' + req.url + '\r', 'utf-8');
     next();


}

